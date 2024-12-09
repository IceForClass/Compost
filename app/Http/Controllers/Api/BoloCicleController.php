<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Bolo;
use App\Policies\BoloPolicy;
use Illuminate\Http\Request;
use Orion\Http\Controllers\RelationController;

class BoloCicleController extends RelationController
{
    protected $model = Bolo::class;
    protected $relation = 'cicle';

    protected $policy = BoloPolicy::class;
}