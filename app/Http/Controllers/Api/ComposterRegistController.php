<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Composter;
use Illuminate\Http\Request;
use Orion\Concerns\DisablePagination;
use Orion\Http\Controllers\RelationController;

class ComposterRegistController extends RelationController
{
    use DisablePagination;
    protected $model = Composter::class;
    protected $relation = 'regist';
}