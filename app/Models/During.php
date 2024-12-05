<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class During extends Model
{
    use HasFactory;

    public function registro(){
        return $this->belongsTo(Regist::class,'regist_id');
    }
}