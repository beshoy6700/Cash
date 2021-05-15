<?php

use Illuminate\Http\Request;
use Modules\Roles\Http\Controllers\RolesController;

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

Route::group(['prefix' => 'v1/admin', 'middleware' => ['api', 'checkPassword', 'changeLanguage']], function () {
    Route::group(['prefix' => 'roles', 'middleware' => ['auth.guard:admin-api']], function () {
        Route::get('list', [RolesController::class, 'getList'])->name('roles.api.list');
        Route::post('create-role', [RolesController::class, 'createRole'])->name('roles.api.createRole');
        Route::post('create-permission', [RolesController::class, 'createPermission'])->name('roles.api.createPermission');
    });
});
