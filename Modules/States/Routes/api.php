<?php

use Illuminate\Http\Request;
use Modules\States\Http\Controllers\Api\StatesController;
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
    Route::group(['prefix' => 'states', 'middleware' => ['auth.guard:admin-api']], function () {
        Route::get('/list', [StatesController::class, 'getList'])->name('admin.api.states');
        Route::get('/active-list', [StatesController::class, 'activeList'])->name('admin.api.states.activeList');
        Route::post('/create', [StatesController::class, 'create'])->name('admin.api.states.create');
        Route::get('/show/{id}', [StatesController::class, 'show'])->name('admin.api.states.show');
        Route::get('/edit/{id}', [StatesController::class, 'edit'])->name('admin.api.states.edit');
        Route::get('/restore/{id}', [StatesController::class, 'restore'])->name('admin.api.states.restore');
        Route::delete('/delete/{id}', [StatesController::class, 'destroy'])->name('admin.api.states.destroy');
        Route::delete('/force-delete/{id}', [StatesController::class, 'forceDeleted'])->name('admin.api.states.delete');
        Route::get('/change-status/{id}', [StatesController::class, 'ChangeStatus'])->name('admin.api.states.status');
    });
});
