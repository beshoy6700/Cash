<?php

use Illuminate\Http\Request;
use Modules\Countries\Http\Controllers\Api\CountriesController;

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
    Route::group(['prefix' => 'countries', 'middleware' => ['auth.guard:admin-api']], function () {
        Route::get('/list', [CountriesController::class, 'getList'])->name('admin.api.countries');
        Route::get('/active-list', [CountriesController::class, 'activeList'])->name('admin.api.countries.activeList');
        Route::post('/create', [CountriesController::class, 'create'])->name('admin.api.countries.create');
        Route::get('/show/{id}', [CountriesController::class, 'show'])->name('admin.api.countries.show');
        Route::get('/edit/{id}', [CountriesController::class, 'edit'])->name('admin.api.countries.edit');
        Route::get('/restore/{id}', [CountriesController::class, 'restore'])->name('admin.api.countries.restore');
        Route::delete('/delete/{id}', [CountriesController::class, 'destroy'])->name('admin.api.countries.destroy');
        Route::delete('/force-delete/{id}', [CountriesController::class, 'forceDeleted'])->name('admin.api.countries.delete');
        Route::get('/change-status/{id}', [CountriesController::class, 'ChangeStatus'])->name('admin.api.countries.status');

    });
});
