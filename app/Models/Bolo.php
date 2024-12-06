<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bolo extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'description'];
    
    public function cicle(){
        return $this->hasMany(Cicle::class);
    } 
}