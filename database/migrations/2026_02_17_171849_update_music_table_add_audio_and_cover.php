<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('music', function (Blueprint $table) {
            $table->string('audio_path')->after('title')->nullable();
            $table->string('cover_path')->after('audio_path')->nullable();
            $table->dropColumn('youtube_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('music', function (Blueprint $table) {
            $table->string('youtube_id')->after('title')->nullable();
            $table->dropColumn('audio_path');
            $table->dropColumn('cover_path');
        });
    }
};
