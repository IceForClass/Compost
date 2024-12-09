<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class During extends Model
{
    use HasFactory;

    protected $fillable = ['regist_id', 'fill_level', 'photo', 'observations'];

    public function registro(){
        return $this->belongsTo(Regist::class,'regist_id');
    }
}