<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Composter extends Model
{
    use HasFactory;

    protected $fillable = ['ocupada'];

    public function centre()
    {
        return $this->belongsTo(Centre::class, 'centre_id', 'id');
    }

    public function regist()
    {
        return $this->hasMany(Regist::class, 'composter_id', 'id');
    }
}