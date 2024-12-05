<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Orion\Http\Controllers\RelationController;

class UsersCentreController extends RelationController
{
    protected $model = User::class;
    protected $relation = 'centre';
}