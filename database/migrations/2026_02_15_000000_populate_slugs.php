<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        $projects = DB::table('projects')->whereNull('slug')->orWhere('slug', '')->get();
        foreach ($projects as $project) {
            $slug = Str::slug($project->title);
            // Ensure uniqueness
            $originalSlug = $slug;
            $count = 1;
            while (DB::table('projects')->where('slug', $slug)->where('id', '!=', $project->id)->exists()) {
                $slug = $originalSlug . '-' . $count++;
            }
            
            DB::table('projects')->where('id', $project->id)->update(['slug' => $slug]);
        }

        $services = DB::table('services')->whereNull('slug')->orWhere('slug', '')->get();
        foreach ($services as $service) {
            $slug = Str::slug($service->title);
             // Ensure uniqueness
             $originalSlug = $slug;
             $count = 1;
             while (DB::table('services')->where('slug', $slug)->where('id', '!=', $service->id)->exists()) {
                 $slug = $originalSlug . '-' . $count++;
             }

            DB::table('services')->where('id', $service->id)->update(['slug' => $slug]);
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // No need to reverse data population
    }
};
