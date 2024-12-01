<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Composter extends Model
{
    use HasFactory;

    public function centre()
    {
        return $this->belongsTo(Centre::class, 'centre_id', 'id');
    }

    public function registro()
    {
        return $this->belongsTo(Regist::class, 'regist_id');
    }
}