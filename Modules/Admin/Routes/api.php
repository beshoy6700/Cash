<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Modules\Admin\Http\Controllers\Api\AuthController;
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

Route::group(['prefix' => 'v1', 'middleware' => ['api','checkPassword','changeLanguage']], function () {
    Route::group(['prefix' => 'admin'], function () {
        Route::post('login', [AuthController::class,'login'])->name('admin.api.login');

        Route::post('logout', [AuthController::class,'logout'])->middleware(['auth.guard:admin-api'])->name('admin.api.logout');
    });
});

