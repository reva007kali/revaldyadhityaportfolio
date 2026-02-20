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
    public $maxHistory = 15; // Sedikit lebih panjang untuk konteks yang lebih baik

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
                    'description' => 'Cari project yang pernah dikerjakan Revaldy untuk meyakinkan user.',
                    'parameters' => [
                        'type' => 'object',
                        'properties' => [
                            'keyword' => ['type' => 'string', 'description' => 'Contoh: landing page, sekolah, fintech']
                        ]
                    ]
                ]
            ],
            [
                'type' => 'function',
                'function' => [
                    'name' => 'get_website_examples',
                    'description' => 'Cari contoh website dari katalog berdasarkan tag atau warna (seperti pink, dark, clean).',
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
                    'description' => 'Ambil data harga untuk memberikan estimasi kepada user.',
                    'parameters' => [
                        'type' => 'object',
                        'properties' => [
                            'type' => ['type' => 'string', 'description' => 'Tipe website']
                        ]
                    ]
                ]
            ],
            [
                'type' => 'function',
                'function' => [
                    'name' => 'capture_lead',
                    'description' => 'WAJIB digunakan jika user serius ingin order, tanya harga detail, atau memberikan nomor kontak.',
                    'parameters' => [
                        'type' => 'object',
                        'properties' => [
                            'name' => ['type' => 'string', 'description' => 'Nama user'],
                            'contact' => ['type' => 'string', 'description' => 'Nomor WhatsApp atau email user'],
                            'description' => ['type' => 'string', 'description' => 'Ringkasan keinginan user'],
                            'budget' => ['type' => 'string', 'description' => 'Budget user']
                        ],
                        'required' => ['description', 'contact']
                    ]
                ]
            ]
        ];
    }

    // HANDLERS (LOGIC)
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
        return "Daftar Paket Harga Revaldy: " . PricingPlan::all()->toJson();
    }

    private function handleCaptureLead($data) {
        try {
            // Sesuaikan mapping dengan kolom di migration kamu
            $lead = Lead::create([
                'name'                => $data['name'] ?? 'Guest',
                'contact'             => $data['contact'] ?? 'Unknown',
                'project_type'        => 'AI Inquiry',
                'budget_range'        => $data['budget'] ?? 'TBD',
                'project_description' => $data['description'] ?? 'No description provided',
                'status'              => 'new',
                'ai_notes'            => 'Captured automatically by Reva AI Assistant'
            ]);
            return "SUCCESS: Lead berhasil disimpan ke database Revaldy dengan ID #" . $lead->id;
        } catch (\Exception $e) {
            Log::error("Capture Lead Database Error: " . $e->getMessage());
            return "ERROR: Gagal simpan ke database. Pastikan tidak ada kolom timestamps.";
        }
    }

    public function sendMessage()
    {
        if (empty($this->userInput)) return;
        $this->messages[] = ['role' => 'user', 'content' => $this->userInput];
        $this->userInput = '';
        $this->processAI();
    }

    protected function processAI($retryCount = 0)
    {
        // Safety break untuk mencegah loop tak terbatas
        if ($retryCount > 3) {
            $this->messages[] = ['role' => 'assistant', 'content' => 'Aku sudah catat detailnya, tapi sistem perangkum lagi sibuk. Langsung WA Reva aja ya di 082260894009!'];
            return;
        }

        try {
            $about = AboutSection::first();
            $systemPrompt = "Anda adalah AI Sales Consultant Revaldy Adhitya (Web Developer).
            Gunakan bahasa gaul/kekinian yang sopan (pake 'aku-kamu'). 
            Identitas Reva: " . ($about->description ?? 'Expert Web Developer') . ". 
            WA: 082260894009.
            
            Jika user (seperti Audrey) sudah memberikan nomor kontak dan detail budget, 
            panggil fungsi capture_lead SEKARANG JUGA untuk mengamankan data.";

            // Kirim ke OpenAI dengan Timeout lebih lama
            $response = Http::withToken(config('services.openai.key'))
                ->timeout(120) 
                ->post('https://api.openai.com/v1/chat/completions', [
                    'model' => 'gpt-4o-mini',
                    'messages' => array_merge([['role' => 'system', 'content' => $systemPrompt]], array_slice($this->messages, -$this->maxHistory)),
                    'tools' => $this->getTools(),
                    'tool_choice' => 'auto'
                ]);

            if ($response->failed()) {
                Log::error("OpenAI API Error: " . $response->body());
                throw new \Exception("API Timeout or Error");
            }

            $res = $response->json();
            $aiMessage = $res['choices'][0]['message'] ?? null;

            if (!$aiMessage) throw new \Exception("Empty AI Response");

            // LOGIC TOOL CALLING
            if (isset($aiMessage['tool_calls'])) {
                $this->messages[] = $aiMessage; // Masukkan instruksi tool ke history

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

                    $this->messages[] = [
                        'tool_call_id' => $tool['id'],
                        'role' => 'tool',
                        'name' => $name,
                        'content' => $output
                    ];
                }
                
                // Panggil kembali AI untuk merespon hasil fungsi (REKURSIF)
                return $this->processAI($retryCount + 1);
            }

            // SIMPAN JAWABAN TEKS BIASA
            if (isset($aiMessage['content']) && $aiMessage['content'] !== null) {
                $this->messages[] = ['role' => 'assistant', 'content' => $aiMessage['content']];
            }

        } catch (\Exception $e) {
            Log::error("ChatBot Fatal Error: " . $e->getMessage());
            $this->messages[] = [
                'role' => 'assistant', 
                'content' => 'Aduh sorry Audrey, koneksi otak AI-ku lagi drop. Chat Reva langsung di WA 082260894009 aja ya, dia fast respon kok! 😊'
            ];
        }

        $this->dispatch('scroll-to-bottom');
    }

    public function toggleChat() {
        $this->isOpen = !$this->isOpen;
        if ($this->isOpen) $this->dispatch('scroll-to-bottom');
    }

    public function render() { return view('livewire.chat-bot'); }
}