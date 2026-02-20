<?php

namespace App\Livewire;

use Livewire\Component;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use App\Models\AboutSection;
use App\Models\Project;
use App\Models\Service;
use App\Models\PricingPlan;
use App\Models\Lead;
use App\Models\Website;

class ChatBot extends Component
{
    public $isOpen = false;
    public $userInput = '';
    public $messages = [];
    public $maxHistory = 12;

    public function mount()
    {
        $this->messages[] = [
            'role' => 'assistant', 
            'content' => 'Halo! Saya asisten AI Revaldy. Ada yang bisa saya bantu mengenai pembuatan website, katalog contoh, atau estimasi biaya?'
        ];
    }

    private function getTools()
    {
        return [
            [
                'type' => 'function',
                'function' => [
                    'name' => 'get_portfolio',
                    'description' => 'Cari project yang pernah dikerjakan Revaldy.',
                    'parameters' => [
                        'type' => 'object',
                        'properties' => [
                            'keyword' => ['type' => 'string']
                        ]
                    ]
                ]
            ],
            [
                'type' => 'function',
                'function' => [
                    'name' => 'get_website_examples',
                    'description' => 'Cari contoh website dari katalog berdasarkan tag atau warna.',
                    'parameters' => [
                        'type' => 'object',
                        'properties' => [
                            'tag' => ['type' => 'string'],
                            'color' => ['type' => 'string']
                        ]
                    ]
                ]
            ],
            [
                'type' => 'function',
                'function' => [
                    'name' => 'get_pricing_and_estimate',
                    'description' => 'Ambil data harga dan estimasi.',
                    'parameters' => [
                        'type' => 'object',
                        'properties' => [
                            'type' => ['type' => 'string']
                        ]
                    ]
                ]
            ],
            [
                'type' => 'function',
                'function' => [
                    'name' => 'capture_lead',
                    'description' => 'Simpan data jika user serius ingin order atau tanya harga detail.',
                    'parameters' => [
                        'type' => 'object',
                        'properties' => [
                            'name' => ['type' => 'string'],
                            'contact' => ['type' => 'string'],
                            'description' => ['type' => 'string'],
                            'budget' => ['type' => 'string']
                        ],
                        'required' => ['description']
                    ]
                ]
            ]
        ];
    }

    // HANDLERS
    private function handleGetWebsiteExamples($tag = null, $color = null) {
        $q = Website::query();
        if ($tag) $q->where('tags', 'like', "%$tag%")->orWhere('description', 'like', "%$tag%");
        if ($color) $q->where('color', 'like', "%$color%");
        return $q->limit(3)->get(['title', 'description', 'tags', 'color'])->toJson();
    }

    private function handleGetPortfolio($keyword = null) {
        return Project::when($keyword, fn($q) => $q->where('title', 'like', "%$keyword%"))
                ->limit(3)->get(['title', 'description'])->toJson();
    }

    private function handleGetPricing($type) {
        return "Daftar Harga: " . PricingPlan::all()->toJson();
    }

    private function handleCaptureLead($data) {
        try {
            $lead = Lead::create([
                'name' => $data['name'] ?? 'Guest',
                'contact' => $data['contact'] ?? 'Unknown',
                'project_type' => 'AI Inquiry',
                'budget_range' => $data['budget'] ?? 'TBD',
                'project_description' => $data['description'],
                'status' => 'new'
            ]);
            return "SUCCESS: Lead tersimpan ID #{$lead->id}.";
        } catch (\Exception $e) {
            Log::error("Capture Lead Error: " . $e->getMessage());
            return "ERROR: Gagal menyimpan data.";
        }
    }

    public function sendMessage()
    {
        if (empty($this->userInput)) return;
        $this->messages[] = ['role' => 'user', 'content' => $this->userInput];
        $this->userInput = '';
        $this->processAI();
    }

    protected function processAI()
    {
        try {
            $about = AboutSection::first();
            $systemPrompt = "Anda adalah AI Sales Consultant Revaldy Adhitya. Gunakan bahasa gaul/kekinian yang sopan (pake 'aku-kamu' atau 'gue-lo' jika dirasa cocok dengan tone user). 
            Identitas Reva: " . ($about->description ?? 'Web Developer Expert') . ". WA: 082260894009.
            Jika user serius (tanya harga, mau buat web), WAJIB simpan data ke capture_lead.";

            $response = Http::withToken(config('services.openai.key'))
                ->post('https://api.openai.com/v1/chat/completions', [
                    'model' => 'gpt-4o-mini',
                    'messages' => array_merge([['role' => 'system', 'content' => $systemPrompt]], array_slice($this->messages, -$this->maxHistory)),
                    'tools' => $this->getTools(),
                    'tool_choice' => 'auto'
                ]);

            $res = $response->json();
            if (!isset($res['choices'][0]['message'])) throw new \Exception("API Error");

            $aiMessage = $res['choices'][0]['message'];

            // Cek Tool Call
            if (isset($aiMessage['tool_calls'])) {
                $this->messages[] = $aiMessage;
                foreach ($aiMessage['tool_calls'] as $tool) {
                    $name = $tool['function']['name'];
                    $args = json_decode($tool['function']['arguments'], true);
                    $output = match($name) {
                        'get_website_examples' => $this->handleGetWebsiteExamples($args['tag'] ?? null, $args['color'] ?? null),
                        'get_portfolio' => $this->handleGetPortfolio($args['keyword'] ?? null),
                        'get_pricing_and_estimate' => $this->handleGetPricing($args['type'] ?? ''),
                        'capture_lead' => $this->handleCaptureLead($args),
                        default => 'Function not found'
                    };
                    $this->messages[] = ['tool_call_id' => $tool['id'], 'role' => 'tool', 'name' => $name, 'content' => $output];
                }
                return $this->processAI();
            }

            if (isset($aiMessage['content']) && $aiMessage['content'] !== null) {
                $this->messages[] = ['role' => 'assistant', 'content' => $aiMessage['content']];
            }
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            $this->messages[] = ['role' => 'assistant', 'content' => 'Aduh sorry banget, koneksi lagi drop. Chat Reva di WA aja ya!'];
        }
        $this->dispatch('scroll-to-bottom');
    }

    public function toggleChat() {
        $this->isOpen = !$this->isOpen;
        if ($this->isOpen) $this->dispatch('scroll-to-bottom');
    }

    public function render() { return view('livewire.chat-bot'); }
}