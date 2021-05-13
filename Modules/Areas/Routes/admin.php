<?php

/*
|--------------------------------------------------------------------------
| Admin Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "admin" middleware group. Now create something great!
|
*/
    Route::group(['prefix' => 'admin'], function () {
        Route::group(['prefix' => 'areas', 'middleware' => 'auth:admin'], function () {
            Route::get('/', 'AreasController@index')->name('admin.areas');
            Route::get('/active-list', 'AreasController@activeList')->name('admin.areas.activeList');
            Route::get('/create', 'AreasController@create')->name('admin.areas.create');
            Route::post('/store', 'AreasController@store')->name('admin.areas.store');
            Route::get('/show/{id}', 'AreasController@show')->name('admin.areas.show');
            Route::get('/edit/{id}', 'AreasController@edit')->name('admin.areas.edit');
            Route::patch('/update/{id}', 'AreasController@update')->name('admin.areas.update');
            Route::get('/restore/{id}', 'AreasController@restore')->name('admin.areas.restore');
            Route::delete('/delete/{id}', 'AreasController@destroy')->name('admin.areas.destroy');
            Route::delete('/force-delete/{id}', 'AreasController@forceDeleted')->name('admin.areas.delete');
            Route::get('/change-status/{id}', 'AreasController@ChangeStatus')->name('admin.areas.status');
        });
    });
