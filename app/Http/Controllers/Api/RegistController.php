<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Regist;
use App\Policies\RegistPolicy;
use Illuminate\Http\Request;
use Orion\Concerns\DisablePagination;
use Orion\Http\Controllers\Controller as ControllersController;

class RegistController extends ControllersController
{
    use DisablePagination;
    protected $model = Regist::class; // or "App\Models\Post"

    protected $policy = RegistPolicy::class;
}