<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Cicle;
use App\Policies\CiclePolicy;
use Illuminate\Http\Request;
use Orion\Concerns\DisablePagination;
use Orion\Http\Controllers\Controller as ControllersController;

class CicleController extends ControllersController
{
    use DisablePagination;
    protected $model = Cicle::class; // or "App\Models\Post"

    protected $policy = CiclePolicy::class;

}