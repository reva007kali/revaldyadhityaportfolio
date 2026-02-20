<?php

namespace App\Livewire;

use Livewire\Component;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;
// Import semua model
use App\Models\AboutSection;
use App\Models\Project;
use App\Models\Service;
use App\Models\PricingPlan;

class ChatBot extends Component
{
    public $isOpen = false;
    public $userInput = '';
    public $messages = [];

    /**
     * Inisialisasi pesan sambutan saat komponen dimuat
     */
    public function mount()
    {
        $this->messages[] = [
            'role' => 'assistant', 
            'content' => 'Halo! Saya asisten virtual Revaldy. Ada yang bisa saya bantu terkait project, layanan, atau harga jasa saya?'
        ];
    }

    /**
     * Membuka dan menutup jendela chat
     */
    public function toggleChat()
    {
        $this->isOpen = !$this->isOpen;
        
        // Dispatch event untuk memastikan scroll ke bawah saat dibuka
        if ($this->isOpen) {
            $this->dispatch('scroll-to-bottom');
        }
    }

    /**
     * Logika utama pengiriman pesan dan pengambilan data database
     */
    public function sendMessage()
    {
        if (empty($this->userInput)) return;

        $userQuestion = $this->userInput;
        $this->messages[] = ['role' => 'user', 'content' => $userQuestion];
        $this->userInput = '';

        // --- 1. AMBIL DATA DASAR (Selalu dikirim sebagai identitas) ---
        $aboutMe = AboutSection::first();
        $context = "IDENTITAS PEMILIK WEBSITE:\n";
        $context .= "Nama: Revaldy Adhitya\n";
        $context .= "WhatsApp atau telepon: [+6282260894009](https://wa.me/6282260894009)\n";
        $context .= "email: le.revaldy@gmail.com\n";
        $context .= "Tentang: " . ($aboutMe->description ?? 'Seorang Web Developer Professional') . "\n\n";

        // --- 2. PENCARIAN DATA BERDASARKAN KATA KUNCI (Smart Context) ---
        $inputLower = strtolower($userQuestion);

        // Cari Data Project
        if (Str::contains($inputLower, ['project', 'karya', 'portofolio', 'hasil', 'buat', 'bikin'])) {
            $projects = Project::limit(5)->get();
            $context .= "DAFTAR PROJECT/PORTOFOLIO:\n";
            foreach ($projects as $p) {
                $context .= "- {$p->title}: {$p->description}\n";
            }
            $context .= "\n";
        }

        // Cari Data Layanan
        if (Str::contains($inputLower, ['layanan', 'service', 'jasa', 'bisa apa', 'keahlian'])) {
            $services = Service::all();
            $context .= "LAYANAN YANG TERSEDIA:\n";
            foreach ($services as $s) {
                $context .= "- {$s->title}: {$s->description}\n";
            }
            $context .= "\n";
        }

        // Cari Data Harga (Pricing)
        if (Str::contains($inputLower, ['harga', 'biaya', 'price', 'paket', 'bayar', 'murah', 'mahal', 'pricing'])) {
            $pricing = PricingPlan::all();
            $context .= "DAFTAR HARGA DAN PAKET JASA:\n";
            foreach ($pricing as $pr) {
                // Menangani error Array to String conversion pada kolom features
                $features = is_array($pr->features) ? implode(', ', $pr->features) : $pr->features;
                
                $context .= "- Paket {$pr->name}: Harga {$pr->price}. Fitur: {$features}. Info: {$pr->description}\n";
            }
            $context .= "\n";
        }

        // --- 3. KIRIM KE OPENAI VIA HTTP CLIENT ---
        try {
            $response = Http::withToken(config('services.openai.key'))
                ->timeout(60)
                ->post('https://api.openai.com/v1/chat/completions', [
                    'model' => 'gpt-3.5-turbo',
                    'messages' => array_merge([
                        [
                            'role' => 'system', 
                            'content' => "Anda adalah asisten virtual Revaldy Adhitya (seorang Web Developer). 
                            Tugas Anda adalah menjawab pertanyaan pengunjung website menggunakan data berikut:\n\n" . $context . "
                            \nINSTRUKSI TAMBAHAN:
                            1. Jawablah dengan ramah dan profesional.
                            2. Gunakan bahasa Indonesia yang santai tapi sopan.
                            3. Jika data yang ditanyakan tidak ada di teks di atas, sarankan user untuk menghubungi Reva langsung via WhatsApp atau Email.
                            4. Jangan memberikan informasi palsu di luar data yang diberikan.
                            5. berikan nomor telefon & email dengan format link agar bisa langsung di klik oleh user"
                        ]
                    ], $this->messages),
                    'temperature' => 0.7,
                ]);

            if ($response->successful()) {
                $aiMessage = $response->json()['choices'][0]['message']['content'];
                $this->messages[] = ['role' => 'assistant', 'content' => $aiMessage];
            } else {
                $this->messages[] = ['role' => 'assistant', 'content' => 'Maaf, saya mengalami kendala teknis saat menghubungi server AI.'];
            }
        } catch (\Exception $e) {
            $this->messages[] = ['role' => 'assistant', 'content' => 'Koneksi terputus. Silakan coba beberapa saat lagi.'];
        }

        // Trigger scroll ke bawah di sisi frontend
        $this->dispatch('scroll-to-bottom');
    }

    public function render()
    {
        return view('livewire.chat-bot');
    }
}