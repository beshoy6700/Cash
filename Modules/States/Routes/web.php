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

Route::group(['prefix' => 'states', 'middleware' => 'auth'], function () {
    Route::get('/', 'StatesController@index')->name('states');
    Route::get('/active-list', 'StatesController@activeList')->name('states.activeList');
    Route::get('/create', 'StatesController@create')->name('states.create');
    Route::post('/store', 'StatesController@store')->name('states.store');
    Route::get('/show/{id}', 'StatesController@show')->name('states.show');
    Route::get('/edit/{id}', 'StatesController@edit')->name('states.edit');
    Route::patch('/update/{id}', 'StatesController@update')->name('states.update');
    Route::get('/restore/{id}', 'StatesController@restore')->name('states.restore');
    Route::delete('/delete/{id}', 'StatesController@destroy')->name('states.destroy');
    Route::delete('/force-delete/{id}', 'StatesController@forceDeleted')->name('states.delete');
    Route::get('/change-status/{id}', 'StatesController@ChangeStatus')->name('states.status');
});
