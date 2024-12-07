<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\After;
use App\Policies\AfterPolicy;
use Illuminate\Http\Request;
use Orion\Concerns\DisablePagination;
use Orion\Http\Controllers\Controller as ControllersController;

class AfterController extends ControllersController
{
    use DisablePagination;
    protected $model = After::class; // or "App\Models\Post"

    protected $policy = AfterPolicy::class;
}