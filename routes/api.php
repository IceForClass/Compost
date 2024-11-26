<?php

use Illuminate\Support\Facades\Route;
use Orion\Facades\Orion;
use App\Http\Controllers\api\CentreController;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

Route::group(['as' => 'api.'], function() {
    Orion::resource('centres', CentreController::class);
});