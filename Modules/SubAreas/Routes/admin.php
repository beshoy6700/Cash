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


Route::group(['prefix' => 'subAreas','middleware'=>'auth:admin'], function () {
    Route::get('/','SubAreasController@index')->name('admin.subAreas');
    Route::get('/active-list','SubAreasController@activeList')->name('admin.subAreas.activeList');
    Route::get('/create','SubAreasController@create')->name('admin.subAreas.create');
    Route::post('/store','SubAreasController@store')->name('admin.subAreas.store');
    Route::get('/show/{id}','SubAreasController@show')->name('admin.subAreas.show');
    Route::get('/edit/{id}','SubAreasController@edit')->name('admin.subAreas.edit');
    Route::patch('/update/{id}','SubAreasController@update')->name('admin.subAreas.update');
    Route::get('/restore/{id}','SubAreasController@restore')->name('admin.subAreas.restore');
    Route::delete('/delete/{id}','SubAreasController@destroy')->name('admin.subAreas.destroy');
    Route::delete('/force-delete/{id}','SubAreasController@forceDeleted')->name('admin.subAreas.delete');
    Route::get('/change-status/{id}','SubAreasController@ChangeStatus')->name('admin.subAreas.status');
});
