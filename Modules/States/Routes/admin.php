<?php

/*
|--------------------------------------------------------------------------
| Admin Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
    Route::group(['prefix' => 'admin'], function () {
        Route::group(['prefix' => 'states', 'middleware' => 'auth:admin'], function () {
            Route::get('/', 'StatesController@index')->name('admin.states');
            Route::get('/active-list', 'StatesController@activeList')->name('admin.states.activeList');
            Route::get('/create', 'StatesController@create')->name('admin.states.create');
            Route::post('/store', 'StatesController@store')->name('admin.states.store');
            Route::get('/show/{id}', 'StatesController@show')->name('admin.states.show');
            Route::get('/edit/{id}', 'StatesController@edit')->name('admin.states.edit');
            Route::patch('/update/{id}', 'StatesController@update')->name('admin.states.update');
            Route::get('/restore/{id}', 'StatesController@restore')->name('admin.states.restore');
            Route::delete('/delete/{id}', 'StatesController@destroy')->name('admin.states.destroy');
            Route::delete('/force-delete/{id}', 'StatesController@forceDeleted')->name('admin.states.delete');
            Route::get('/change-status/{id}', 'StatesController@ChangeStatus')->name('admin.states.status');
        });
    });
