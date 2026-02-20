<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ChatSession extends Model
{
    protected $fillable = ['session_id', 'ip_address', 'messages'];

    protected $casts = [
        'messages' => 'array',
    ];
}
