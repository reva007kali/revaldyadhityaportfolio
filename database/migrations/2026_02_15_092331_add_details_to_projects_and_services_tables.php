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
        Schema::table('projects', function (Blueprint $table) {
            $table->string('category')->nullable()->after('slug');
            $table->string('role')->nullable()->after('category');
            $table->string('year')->nullable()->after('role');
            $table->string('client')->nullable()->after('year');
        });

        Schema::table('services', function (Blueprint $table) {
            $table->json('features')->nullable()->after('content');
            $table->string('turnaround_time')->nullable()->after('features');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('projects', function (Blueprint $table) {
            $table->dropColumn(['category', 'role', 'year', 'client']);
        });

        Schema::table('services', function (Blueprint $table) {
            $table->dropColumn(['features', 'turnaround_time']);
        });
    }
};
