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
}