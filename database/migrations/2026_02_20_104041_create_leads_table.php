<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('leads', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable(); // Nama user (jika AI berhasil tanya)
            $table->string('contact')->nullable(); // WA atau Email
            $table->string('project_type')->nullable(); // Misal: E-commerce, Portofolio, SaaS
            $table->string('budget_range')->nullable(); // Estimasi budget
            $table->text('project_description')->nullable(); // Ringkasan project dari AI
            $table->enum('status', ['new', 'contacted', 'deal', 'lost'])->default('new'); // Untuk CRM sederhana
            $table->text('ai_notes')->nullable(); // Catatan tambahan dari AI
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('leads');
    }
};
