<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Regist;
use Illuminate\Http\Request;
use Orion\Concerns\DisablePagination;
use Orion\Http\Controllers\RelationController;

class RegistDuringController extends RelationController
{
    // use DisableAuthorization;
    use DisablePagination;
    protected $model = Regist::class;
    protected $relation = 'during';
}