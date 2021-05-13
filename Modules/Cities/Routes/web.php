<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


    Route::group(['prefix' => 'cities', 'middleware' => 'auth'], function () {
        Route::get('/', 'CitiesController@index')->name('cities');
        Route::get('/active-list', 'CitiesController@activeList')->name('cities.activeList');
        Route::get('/create', 'CitiesController@create')->name('cities.create');
        Route::post('/store', 'CitiesController@store')->name('cities.store');
        Route::get('/show/{id}', 'CitiesController@show')->name('cities.show');
        Route::get('/edit/{id}', 'CitiesController@edit')->name('cities.edit');
        Route::patch('/update/{id}', 'CitiesController@update')->name('cities.update');
        Route::get('/restore/{id}', 'CitiesController@restore')->name('cities.restore');
        Route::delete('/delete/{id}', 'CitiesController@destroy')->name('cities.destroy');
        Route::delete('/force-delete/{id}', 'CitiesController@forceDeleted')->name('cities.delete');
        Route::get('/change-status/{id}', 'CitiesController@ChangeStatus')->name('cities.status');
    });

