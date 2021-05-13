<?php


/*
|--------------------------------------------------------------------------
| Admin Routes
|--------------------------------------------------------------------------
|
| Here is where you can register Admin routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "admin" middleware group. Enjoy building your Admin!
|
*/
    Route::group(['prefix' => 'admin', 'middleware' => 'guest:admin'], function () {
        Route::get('/login', 'LoginController@getLogin')->name('get.admin.login');
        Route::post('/login', 'LoginController@store')->name('admin.login');
    });
    Route::group(['prefix' => 'admin', 'middleware' => 'auth:admin'], function () {
        Route::get('/dashboard', 'AdminController@index')->name('admin.dashboard');
        Route::post('/logout', 'LoginController@logout')->name('admin.logout');
        Route::group(['prefix' => 'profile'], function () {
            Route::get('/edit', 'ProfileController@editProfile')->name('admin.edit.profile');
            Route::patch('update', 'ProfileController@updateProfile')->name('admin.profile.update');

        });
    });
