<?php

namespace App\Http\Controllers\Api;

use App\Models\Centre;
use Illuminate\Database\Eloquent\Relations\Relation;
use Illuminate\Http\Request;
use Orion\Concerns\DisableAuthorization;
use Orion\Concerns\DisablePagination;
use Orion\Http\Controllers\Controller as ControllersController;
use Orion\Http\Controllers\RelationController;

class CentreCompostersController extends RelationController
{
    // use DisableAuthorization;
    use DisablePagination;
    protected $model = Centre::class;
    protected $relation = 'composters';

}