<?php

namespace App\Livewire\Admin\Gallery;

use Livewire\Component;
use Livewire\WithFileUploads;
use Illuminate\Support\Facades\Storage;
use App\Traits\HandlesFileUploads;
use Illuminate\Support\Str;

class Index extends Component
{
    use WithFileUploads, HandlesFileUploads;

    public $currentPath = '';
    public $files = [];
    public $directories = [];
    public $newFolderName = '';
    public $uploadedFiles = [];
    public $breadcrumbs = [];

    public function mount()
    {
        $this->refreshFiles();
    }

    public function refreshFiles()
    {
        $this->directories = Storage::disk('public')->directories($this->currentPath);

        $files = Storage::disk('public')->files($this->currentPath);
        $this->files = array_map(function ($file) {
            return [
                'path' => $file,
                'name' => basename($file),
                'size' => $this->formatSize(Storage::disk('public')->size($file)),
                'last_modified' => date('Y-m-d H:i:s', Storage::disk('public')->lastModified($file)),
            ];
        }, $files);

        $this->generateBreadcrumbs();
    }

    private function formatSize($bytes)
    {
        $units = ['B', 'KB', 'MB', 'GB', 'TB'];
        for ($i = 0; $bytes > 1024; $i++) {
            $bytes /= 1024;
        }
        return round($bytes, 2) . ' ' . $units[$i];
    }

    public function navigate($path)
    {
        // Prevent navigating above root
        if (Str::startsWith($path, '..') || Str::contains($path, '../')) {
            return;
        }

        $this->currentPath = $path;
        $this->refreshFiles();
    }

    public function goUp()
    {
        if ($this->currentPath === '') {
            return;
        }

        $parts = explode('/', $this->currentPath);
        array_pop($parts);
        $this->currentPath = implode('/', $parts);
        $this->refreshFiles();
    }

    public function createFolder()
    {
        $this->validate([
            'newFolderName' => 'required|string|max:255|regex:/^[a-zA-Z0-9-_]+$/',
        ]);

        $path = $this->currentPath ? $this->currentPath . '/' . $this->newFolderName : $this->newFolderName;

        if (Storage::disk('public')->exists($path)) {
            $this->addError('newFolderName', 'Folder already exists.');
            return;
        }

        Storage::disk('public')->makeDirectory($path);
        $this->newFolderName = '';
        $this->refreshFiles();
        session()->flash('message', 'Folder created successfully.');
    }

    public function deleteFolder($path)
    {
        if (Storage::disk('public')->deleteDirectory($path)) {
            $this->refreshFiles();
            session()->flash('message', 'Folder deleted successfully.');
        } else {
            session()->flash('error', 'Failed to delete folder.');
        }
    }

    public function updatedUploadedFiles()
    {
        $this->validate([
            'uploadedFiles.*' => 'image|max:10240', // 10MB Max
        ]);

        foreach ($this->uploadedFiles as $file) {
            $this->handleFileUpload($file, $this->currentPath, 'public');
        }

        $this->uploadedFiles = [];
        $this->refreshFiles();
        session()->flash('message', 'Files uploaded successfully.');
    }

    public function deleteFile($path)
    {
        if (Storage::disk('public')->delete($path)) {
            $this->refreshFiles();
            session()->flash('message', 'File deleted successfully.');
        } else {
            session()->flash('error', 'Failed to delete file.');
        }
    }

    private function generateBreadcrumbs()
    {
        $parts = array_filter(explode('/', $this->currentPath));
        $breadcrumbs = [['name' => 'Root', 'path' => '']];
        $current = '';

        foreach ($parts as $part) {
            $current = $current ? $current . '/' . $part : $part;
            $breadcrumbs[] = ['name' => $part, 'path' => $current];
        }

        $this->breadcrumbs = $breadcrumbs;
    }

    public function render()
    {
        return view('livewire.admin.gallery.index')->layout('layouts.app');
    }
}
