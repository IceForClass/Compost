<?php

namespace App\Http\Controllers\Api;

use Orion\Concerns\DisableAuthorization;
use Orion\Concerns\DisablePagination;
use App\Models\Composter;
use App\Policies\ComposterPolicy;
use Orion\Http\Controllers\Controller;

class ComposterController extends Controller
{
    // use DisableAuthorization;
    use DisablePagination;
    protected $model = Composter::class; // or "App\Models\Post"

    protected $policy = ComposterPolicy::class;
}