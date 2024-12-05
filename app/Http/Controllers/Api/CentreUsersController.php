<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Centre;
use Illuminate\Database\Eloquent\Relations\Relation;
use Illuminate\Http\Request;
use Orion\Http\Controllers\Controller as ControllersController;
use Orion\Http\Controllers\RelationController;

class CentreUsersController extends RelationController
{
    // use DisableAuthorization;
    protected $model = Centre::class;
    protected $relation = 'users';
}