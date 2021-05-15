<?php

use Illuminate\Http\Request;
use Modules\Users\Http\Controllers\Api\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'v1', 'middleware' => ['api','checkPassword', 'changeLanguage']], function () {
    Route::post('login', [AuthController::class, 'login'])->name('user.api.login');
    Route::post('logout', [AuthController::class, 'logout'])->middleware(['auth.guard:user-api'])->name('user.api.logout');
    Route::group(['prefix' => 'user', 'middleware' => ['auth.guard:user-api']], function () {
       // Route::post('profile', [AuthController::class, 'profile'])->name('user.api.profile');
        Route::post('profile',function (){
            //\Auth::user();
           return auth()->user();
        });
    });
});
