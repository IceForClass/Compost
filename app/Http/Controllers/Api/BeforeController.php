<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Before;
use App\Policies\BeforePolicy;
use Illuminate\Http\Request;
use Orion\Concerns\DisablePagination;
use Orion\Http\Controllers\Controller as ControllersController;

class BeforeController extends ControllersController
{
    use DisablePagination;
    protected $model = Before::class; // or "App\Models\Post"

    protected $policy = BeforePolicy::class;
}