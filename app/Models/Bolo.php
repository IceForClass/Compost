<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bolo extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'description', 'cicle1', 'cicle2', 'cicle3', 'finish'];
    
    public function cicle(){
        return $this->hasMany(Cicle::class);
    } 
}