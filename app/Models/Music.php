<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Music extends Model
{

    protected $fillable = [
        'user_id',
        'title',
        'audio_path',
        'cover_path',
        'is_active',
        'sort_order',
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];
}
