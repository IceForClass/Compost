<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Regist extends Model
{
    use HasFactory;

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function composter(){
        return $this->belongsTo(Composter::class);
    }

    public function before(){
        return $this->hasMany(Before::class);
    }

    public function during(){
        return $this->hasMany(During::class);
    }

    public function after(){
        return $this->hasMany(After::class);
    }
}