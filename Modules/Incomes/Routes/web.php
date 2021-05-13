<?php

use \Modules\Incomes\Http\Controllers\IncomesController;
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



Route::group(['prefix' => 'incomes', 'middleware' => 'auth'], function () {
    Route::get('/', [IncomesController::class,'index'])->name('incomes');
    Route::get('/active-list', [IncomesController::class,'activeList'])->name('incomes.activeList');
    Route::get('/create', [IncomesController::class,'create'])->name('incomes.create');
    Route::post('/store', [IncomesController::class,'store'])->name('incomes.store');
    Route::get('/show/{id}', [IncomesController::class,'show'])->name('incomes.show');
    Route::get('/edit/{id}', [IncomesController::class,'edit'])->name('incomes.edit');
    Route::patch('/update/{id}', [IncomesController::class,'update'])->name('incomes.update');
    Route::get('/restore/{id}', [IncomesController::class,'restore'])->name('incomes.restore');
    Route::delete('/delete/{id}', [IncomesController::class,'destroy'])->name('incomes.destroy');
    Route::delete('/force-delete/{id}', [IncomesController::class,'forceDeleted'])->name('incomes.delete');
    Route::get('/change-status/{id}', [IncomesController::class,'ChangeStatus'])->name('incomes.status');
});
