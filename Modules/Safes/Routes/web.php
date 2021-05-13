<?php
use Modules\Safes\Http\Controllers\SafesController;
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

Route::group(['prefix' => 'safes', 'middleware' => 'auth'], function () {
    Route::get('/', [SafesController::class,'index'])->name('safes');
    /*Route::get('/liveWire/index' , Livewire\Safes::class);*/
    Route::get('/active-list', [SafesController::class,'activeList'])->name('safes.activeList');
    Route::get('/create', [SafesController::class,'create'])->name('safes.create');
    Route::post('/store', [SafesController::class,'store'])->name('safes.store');
    Route::get('/show/{id}', [SafesController::class,'show'])->name('safes.show');
    Route::get('/edit/{id}', [SafesController::class,'edit'])->name('safes.edit');
    Route::patch('/update/{id}', [SafesController::class,'update'])->name('safes.update');
    Route::get('/restore/{id}', [SafesController::class,'restore'])->name('safes.restore');
    Route::delete('/delete/{id}', [SafesController::class,'destroy'])->name('safes.destroy');
    Route::delete('/force-delete/{id}', [SafesController::class,'forceDeleted'])->name('safes.delete');
    Route::get('/change-status/{id}', [SafesController::class,'ChangeStatus'])->name('safes.status');
});
