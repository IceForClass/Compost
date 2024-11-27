<?php

namespace App\Http\Controllers\Api;

use Orion\Concerns\DisableAuthorization;
use Orion\Concerns\DisablePagination;
use App\Models\Centre;
use Orion\Http\Controllers\Controller;

class CentreController extends Controller
{
    use DisableAuthorization;
    use DisablePagination;
    protected $model = Centre::class; // or "App\Models\Post"

}