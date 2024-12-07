<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\During;
use App\Policies\DuringPolicy;
use Illuminate\Http\Request;
use Orion\Concerns\DisablePagination;
use Orion\Http\Controllers\Controller as ControllersController;

class DuringController extends ControllersController
{
    use DisablePagination;
    protected $model = During::class; // or "App\Models\Post"

    protected $policy = DuringPolicy::class;
}