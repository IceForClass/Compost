<?php

use App\Http\Controllers\Api\AfterController;
use App\Http\Controllers\Api\BeforeController;
use App\Http\Controllers\Api\boloController;
use App\Http\Controllers\Api\CentreCompostersController;
use Illuminate\Support\Facades\Route;
use Orion\Facades\Orion;
use App\Http\Controllers\Api\CentreController;
use App\Http\Controllers\Api\CentreUsersController;
use App\Http\Controllers\Api\ComposterController;
use App\Http\Controllers\Api\ComposterRegistController;
use App\Http\Controllers\Api\DuringController;
use App\Http\Controllers\Api\RegistAfterController;
use App\Http\Controllers\Api\RegistBeforeController;
use App\Http\Controllers\Api\RegistController;
use App\Http\Controllers\Api\RegistDuringController;
use App\Http\Controllers\Api\UsersCentreController;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

Route::group(['as' => 'api.'], function() {
    Orion::resource('centres', CentreController::class);
    Orion::resource('composters', ComposterController::class);
    Orion::resource('bolo', boloController::class);
    Orion::resource('regist',RegistController::class);
    Orion::resource('before',BeforeController::class);
    Orion::resource('during',DuringController::class);
    Orion::resource('after',AfterController::class);

});
 
Orion::hasManyResource('centres', 'composters', CentreCompostersController::class);

Orion::hasManyResource('centres', 'users', CentreUsersController::class);

Orion::hasManyResource('users', 'centres', UsersCentreController::class);

// Orion::hasManyResource('composters', 'regist', ComposterRegistController::class);
Orion::hasManyResource('Regist', 'before', RegistBeforeController::class);
Orion::hasManyResource('Regist', 'during', RegistDuringController::class);
Orion::hasManyResource('Regist', 'after', RegistAfterController::class);