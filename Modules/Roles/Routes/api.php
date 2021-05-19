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

    /**
     *  Roles Route Api
     */
    Route::group(['prefix' => 'roles', 'middleware' => ['auth.guard:admin-api']], function () {
        Route::get('list', [RolesController::class, 'getList'])->name('roles.api.list');
        Route::post('create', [RolesController::class, 'createRole'])->name('roles.api.createRole');
        Route::get('show/{id}', [RolesController::class, 'show'])->name('roles.api.show');
    });

    /**
     *  Permissions Route Api
     */
    Route::group(['prefix' => 'permissions', 'middleware' => ['auth.guard:admin-api']], function () {
        Route::get('list', [RolesController::class, 'getListPermissions'])->name('permissions.api.list');
        Route::post('create', [RolesController::class, 'createPermission'])->name('permissions.api.createPermission');
        Route::post('assign-permission', [RolesController::class, 'assignPermission'])->name('permissions.api.assignPermission');
    });
});
