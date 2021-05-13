<?php

/*
|--------------------------------------------------------------------------
| Admin Routes
|--------------------------------------------------------------------------
|
| Here is where you can register admin routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "admin" middleware group. Now create something great!
|
*/

Route::prefix('churches')->group(function() {
    Route::get('/','ChurchesController@index')->name('admin.churches');
    Route::get('/create','ChurchesController@create')->name('admin.churches.create');
    Route::post('/store','ChurchesController@store')->name('admin.churches.store');
    Route::get('/show/{id}','ChurchesController@show')->name('admin.churches.show');
    Route::get('/edit/{id}','ChurchesController@edit')->name('admin.churches.edit');
    Route::patch('/update/{id}','ChurchesController@update')->name('admin.churches.update');
    Route::get('/restore/{id}','ChurchesController@restore')->name('admin.churches.restore');
    Route::delete('/delete/{id}','ChurchesController@deleted')->name('admin.churches.destroy');
    Route::delete('/force-delete/{id}','ChurchesController@forceDeleted')->name('admin.churches.delete');
    Route::get('/change-status/{id}','ChurchesController@ChangeStatus')->name('admin.churches.status');
});
