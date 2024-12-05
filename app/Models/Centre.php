<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Centre extends Model
{
    use HasFactory;
    
    public function users(): HasMany
    {
        return $this->hasMany(User::class);
    }


    public function composters(): HasMany
    {
        return $this->hasMany(Composter::class);
    }
}