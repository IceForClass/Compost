<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Centre;
use Illuminate\Http\Request;
use Orion\Http\Controllers\Controller as ControllersController;

class CentreUsersController extends ControllersController
{
    protected $model = Centre::class;
    protected $relation = 'users';
}