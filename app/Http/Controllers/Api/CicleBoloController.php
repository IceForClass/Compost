<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Cicle;
use App\Policies\CiclePolicy;
use Illuminate\Http\Request;
use Orion\Http\Controllers\RelationController;

class CicleBoloController extends RelationController
{
    protected $model = Cicle::class;
    protected $relation = 'bolo';

    protected $policy = CiclePolicy::class;
}