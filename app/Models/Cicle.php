<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cicle extends Model
{
    use HasFactory;

    protected $fillable = ['bolo_id', 'start', 'end'];

    public function regist(){
        return $this->hasMany(Regist::class);
    }

    public function bolo(){
        return $this->belongsTo(Bolo::class);
    } 
}