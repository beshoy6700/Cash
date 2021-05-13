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

Route::group(['prefix' => 'areas', 'middleware' => 'auth'], function () {
    Route::get('/', 'AreasController@index')->name('areas');
    Route::get('/active-list', 'AreasController@activeList')->name('areas.activeList');
    Route::get('/create', 'AreasController@create')->name('areas.create');
    Route::post('/store', 'AreasController@store')->name('areas.store');
    Route::get('/show/{id}', 'AreasController@show')->name('areas.show');
    Route::get('/edit/{id}', 'AreasController@edit')->name('areas.edit');
    Route::patch('/update/{id}', 'AreasController@update')->name('areas.update');
    Route::get('/restore/{id}', 'AreasController@restore')->name('areas.restore');
    Route::delete('/delete/{id}', 'AreasController@destroy')->name('areas.destroy');
    Route::delete('/force-delete/{id}', 'AreasController@forceDeleted')->name('areas.delete');
    Route::get('/change-status/{id}', 'AreasController@ChangeStatus')->name('areas.status');
});
