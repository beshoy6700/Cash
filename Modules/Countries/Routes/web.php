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

    Route::group(['prefix' => 'countries', 'middleware' => 'auth'], function () {
        Route::get('/', 'CountriesController@index')->name('countries');
        Route::get('/active-list', 'CountriesController@activeList')->name('countries.activeList');
        Route::get('/create', 'CountriesController@create')->name('countries.create');
        Route::post('/store', 'CountriesController@store')->name('countries.store');
        Route::get('/show/{id}', 'CountriesController@show')->name('countries.show');
        Route::get('/edit/{id}', 'CountriesController@edit')->name('countries.edit');
        Route::patch('/update/{id}', 'CountriesController@update')->name('countries.update');
        Route::get('/restore/{id}', 'CountriesController@restore')->name('countries.restore');
        Route::delete('/delete/{id}', 'CountriesController@destroy')->name('countries.destroy');
        Route::delete('/force-delete/{id}', 'CountriesController@forceDeleted')->name('countries.delete');
        Route::get('/change-status/{id}', 'CountriesController@ChangeStatus')->name('countries.status');
    });

