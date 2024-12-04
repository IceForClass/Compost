<?php

use App\Http\Controllers\Api\boloController;
use App\Http\Controllers\api\CentreCompostersController;
use Illuminate\Support\Facades\Route;
use Orion\Facades\Orion;
use App\Http\Controllers\api\CentreController;
use App\Http\Controllers\api\CentreUsersController;
use App\Http\Controllers\api\ComposterController;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

Route::group(['as' => 'api.'], function() {
    Orion::resource('centres', CentreController::class);
    Orion::resource('composters', ComposterController::class);
    Orion::resource('bolo', boloController::class);
});
 
Orion::hasManyResource('centres', 'composters', CentreCompostersController::class);

Orion::hasManyResource('centres', 'users', CentreUsersController::class);