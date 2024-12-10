<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class During extends Model
{
    use HasFactory;

    protected $fillable = ['regist_id', 'watering_done', 'stirring_done', 'green_deposit', 'green_quantity', 'green_type', 'dry_deposit', 'dry_quantity', 'dry_type', 'photo', 'observations'];

    public function registro(){
        return $this->belongsTo(Regist::class,'regist_id');
    }
}