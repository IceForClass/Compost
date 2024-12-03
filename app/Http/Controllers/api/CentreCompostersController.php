<?php

namespace App\Http\Controllers\api;

use App\Models\Centre;
use Illuminate\Http\Request;
use Orion\Concerns\DisableAuthorization;
use Orion\Concerns\DisablePagination;
use Orion\Http\Controllers\Controller as ControllersController;

class CentreCompostersController extends ControllersController
{
    use DisableAuthorization;
    use DisablePagination;
    protected $model = Centre::class;
    protected $relation = 'composters';

}