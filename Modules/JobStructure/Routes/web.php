<?php
use Modules\JobStructure\Http\Controllers\JobStructureController;
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


Route::group(['prefix' => 'job-structure', 'middleware' => 'auth'], function () {
    Route::get('/', [JobStructureController::class,'index'])->name('jobStructure');
    Route::get('/active-list', [JobStructureController::class,'activeList'])->name('jobStructure.activeList');
    Route::get('/create', [JobStructureController::class,'create'])->name('jobStructure.create');
    Route::post('/store', [JobStructureController::class,'store'])->name('jobStructure.store');
    Route::get('/show/{id}', [JobStructureController::class,'show'])->name('jobStructure.show');
    Route::get('/edit/{id}', [JobStructureController::class,'edit'])->name('jobStructure.edit');
    Route::patch('/update/{id}', [JobStructureController::class,'update'])->name('jobStructure.update');
    Route::get('/restore/{id}', [JobStructureController::class,'restore'])->name('jobStructure.restore');
    Route::delete('/delete/{id}', [JobStructureController::class,'destroy'])->name('jobStructure.destroy');
    Route::delete('/force-delete/{id}', [JobStructureController::class,'forceDeleted'])->name('jobStructure.delete');
    Route::get('/change-status/{id}', [JobStructureController::class,'ChangeStatus'])->name('jobStructure.status');
});
