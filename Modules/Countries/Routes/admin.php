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
        Route::group(['prefix' => 'countries', 'middleware' => 'auth:admin'], function () {
            Route::get('/', 'CountriesController@index')->name('admin.countries');
            Route::get('/active-list', 'CountriesController@activeList')->name('admin.countries.activeList');
            Route::get('/create', 'CountriesController@create')->name('admin.countries.create');
            Route::post('/store', 'CountriesController@store')->name('admin.countries.store');
            Route::get('/show/{id}', 'CountriesController@show')->name('admin.countries.show');
            Route::get('/edit/{id}', 'CountriesController@edit')->name('admin.countries.edit');
            Route::patch('/update/{id}', 'CountriesController@update')->name('admin.countries.update');
            Route::get('/restore/{id}', 'CountriesController@restore')->name('admin.countries.restore');
            Route::delete('/delete/{id}', 'CountriesController@destroy')->name('admin.countries.destroy');
            Route::delete('/force-delete/{id}', 'CountriesController@forceDeleted')->name('admin.countries.delete');
            Route::get('/change-status/{id}', 'CountriesController@ChangeStatus')->name('admin.countries.status');
        });
    });
