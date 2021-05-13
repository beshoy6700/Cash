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
Route::group(['prefix' => 'admin'], function () {
        Route::group(['prefix' => 'cities', 'middleware' => 'auth:admin'], function () {
            Route::get('/', 'CitiesController@index')->name('admin.cities');
            Route::get('/active-list', 'CitiesController@activeList')->name('admin.cities.activeList');
            Route::get('/create', 'CitiesController@create')->name('admin.cities.create');
            Route::post('/store', 'CitiesController@store')->name('admin.cities.store');
            Route::get('/show/{id}', 'CitiesController@show')->name('admin.cities.show');
            Route::get('/edit/{id}', 'CitiesController@edit')->name('admin.cities.edit');
            Route::patch('/update/{id}', 'CitiesController@update')->name('admin.cities.update');
            Route::get('/restore/{id}', 'CitiesController@restore')->name('admin.cities.restore');
            Route::delete('/delete/{id}', 'CitiesController@destroy')->name('admin.cities.destroy');
            Route::delete('/force-delete/{id}', 'CitiesController@forceDeleted')->name('admin.cities.delete');
            Route::get('/change-status/{id}', 'CitiesController@ChangeStatus')->name('admin.cities.status');
        });
    });
