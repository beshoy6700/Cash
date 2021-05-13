<?php

use Modules\Expensives\Http\Controllers\ExpensivesController;

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



Route::group(['prefix' => 'expensives', 'middleware' => 'auth'], function () {
    Route::get('/', [ExpensivesController::class,'index'])->name('expensives');
    Route::get('/active-list', [ExpensivesController::class,'activeList'])->name('expensives.activeList');
    Route::get('/create', [ExpensivesController::class,'create'])->name('expensives.create');
    Route::post('/store', [ExpensivesController::class,'store'])->name('expensives.store');
    Route::get('/show/{id}', [ExpensivesController::class,'show'])->name('expensives.show');
    Route::get('/edit/{id}', [ExpensivesController::class,'edit'])->name('expensives.edit');
    Route::patch('/update/{id}', [ExpensivesController::class,'update'])->name('expensives.update');
    Route::get('/restore/{id}', [ExpensivesController::class,'restore'])->name('expensives.restore');
    Route::delete('/delete/{id}', [ExpensivesController::class,'destroy'])->name('expensives.destroy');
    Route::delete('/force-delete/{id}', [ExpensivesController::class,'forceDeleted'])->name('expensives.delete');
    Route::get('/change-status/{id}', [ExpensivesController::class,'ChangeStatus'])->name('expensives.status');
});
