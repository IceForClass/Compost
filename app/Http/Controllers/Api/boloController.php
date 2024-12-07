<?php

namespace App\Http\Controllers\Api;

use App\Models\Bolo;
use Orion\Concerns\DisableAuthorization;
use Orion\Concerns\DisablePagination;
use App\Models\Centre;
use App\Policies\BoloPolicy;
use Orion\Http\Controllers\Controller;

class boloController extends Controller
{
    // use DisableAuthorization;
    use DisablePagination;
    protected $model = Bolo::class; // or "App\Models\Post"

    protected $policy = BoloPolicy::class;

    public function bolocomposter1(){
        $bolo = Bolo::where('cicle1',true)->where('cicle2',false)->where('cicle3',false)->where('finish',false)->first();
        return response()->json($bolo,200);
    }
    public function bolocomposter2(){
        $bolo = Bolo::where('cicle1',true)->where('cicle2',true)->where('cicle3',false)->where('finish',false)->first();
        return response()->json($bolo,200);
    }

    public function bolocomposter3(){
        $bolo = Bolo::where('cicle1',true)->where('cicle2',true)->where('cicle3',true)->where('finish',false)->first();
        return response()->json($bolo,200);
    }
}