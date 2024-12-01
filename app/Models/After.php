<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class After extends Model
{
    use HasFactory;

    public function registro(){
        return $this->belongsTo(Regist::class,'regist_id');
    }
}