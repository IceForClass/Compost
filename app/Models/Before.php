<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Before extends Model
{
    use HasFactory;

    protected $fillable = ['regist_id', 'temp_ambient', 'temp_compost', 'fill_level', 'olor', 'insect_status', 'insect_description', 'humidity', 'initial_photos', 'initial_observations'];

    public function registro(){
        return $this->belongsTo(Regist::class,'regist_id');
    }
}