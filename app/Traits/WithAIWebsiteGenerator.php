<?php

namespace App\Traits;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Process;

trait WithAIWebsiteGenerator
{
    public $aiPrompt = '';
    public $isGenerating = false;

    public function generateWebsiteContent()
    {
        $this->validate([
            'aiPrompt' => 'required|string|min:3',
        ]);

        $this->isGenerating = true;
        $apiKey = env('OPENAI_API_KEY');

        if (!$apiKey) {
            $this->addError('aiPrompt', 'OpenAI API Key is missing in .env file.');
            $this->isGenerating = false;
            return;
        }

        try {
            $currentCode = $this->content;
            $hasContent = !empty(trim($currentCode));

            // Prepare the prompt
            $systemPrompt = "You are an expert Tailwind CSS and Alpine.js developer. 
            Your goal is to generate or modify high-quality, responsive HTML code for a website or landing page.
            - Use ONLY Tailwind CSS for styling.
            - Use Alpine.js for interactivity if needed.
            - The design should be modern, visually appealing, and dark-mode compatible (using dark: classes or hardcoded dark colors matching bg-[#0b0b0d]).
            - Return ONLY the raw HTML code. Do NOT wrap it in markdown backticks (```html ... ```). Do NOT include explanations.";

            $userMessageContent = "";
            
            if ($hasContent) {
                $userMessageContent .= "Here is the CURRENT CODE:\n\n" . $currentCode . "\n\n";
                $userMessageContent .= "INSTRUCTIONS: modify the code above based on this request: " . $this->aiPrompt . "\n";
                $userMessageContent .= "Return the FULL updated code, not just the changes.";
            } else {
                $userMessageContent .= "INSTRUCTIONS: Create a full website/landing page based on this request: " . $this->aiPrompt . "\n";
                $userMessageContent .= "Include a hero section, features, and footer if not specified otherwise.";
            }

            $response = Http::withHeaders([
                'Authorization' => 'Bearer ' . $apiKey,
                'Content-Type' => 'application/json',
            ])->post('https://api.openai.com/v1/chat/completions', [
                'model' => 'gpt-4', 
                'messages' => [
                    ['role' => 'system', 'content' => $systemPrompt],
                    ['role' => 'user', 'content' => $userMessageContent],
                ],
                'stream' => true,
            ]);

            $body = $response->toPsrResponse()->getBody();

            $this->content = ''; // Reset content to stream the new version
            
            while (!$body->eof()) {
                $chunk = $body->read(1024);
                
                // Parse the SSE stream
                $lines = explode("\n", $chunk);
                foreach ($lines as $line) {
                    if (str_starts_with($line, 'data: ')) {
                        $data = substr($line, 6);
                        if ($data === '[DONE]') break;
                        
                        $json = json_decode($data, true);
                        if (isset($json['choices'][0]['delta']['content'])) {
                            $text = $json['choices'][0]['delta']['content'];
                            // Simple filter to strip markdown if the model disobeys
                            $text = str_replace(['```html', '```'], '', $text);
                            
                            $this->content .= $text;
                            $this->stream('content-editor', $text, false); 
                        }
                    }
                }
            }

            $this->isGenerating = false;
            $this->dispatch('content-generated', $this->content); // Event to update editor

        } catch (\Exception $e) {
            $this->addError('aiPrompt', 'Error generating content: ' . $e->getMessage());
            $this->isGenerating = false;
        }
    }

    public function openInEditor($slug)
    {
        $path = resource_path("views/websites/{$slug}.blade.php");
        
        session()->flash('message', "File is located at: $path");
        
        if (strtoupper(substr(PHP_OS, 0, 3)) === 'WIN') {
            pclose(popen("start code \"$path\"", "r"));
        } else {
            exec("code \"$path\" > /dev/null 2>&1 &");
        }
    }
}
