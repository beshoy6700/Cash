<?php
use Modules\Companies\Http\Controllers\CompaniesController;
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
Route::group(['prefix' => 'companies', 'middleware' => 'auth'], function () {
    Route::get('/', [CompaniesController::class,'index'])->name('companies');
    Route::get('/active-list', [CompaniesController::class,'activeList'])->name('companies.activeList');
    Route::get('/create', [CompaniesController::class,'create'])->name('companies.create');
    Route::post('/store', [CompaniesController::class,'store'])->name('companies.store');
    Route::get('/show/{id}', [CompaniesController::class,'show'])->name('companies.show');
    Route::get('/edit/{id}', [CompaniesController::class,'edit'])->name('companies.edit');
    Route::patch('/update/{id}', [CompaniesController::class,'update'])->name('companies.update');
    Route::get('/restore/{id}', [CompaniesController::class,'restore'])->name('companies.restore');
    Route::delete('/delete/{id}', [CompaniesController::class,'destroy'])->name('companies.destroy');
    Route::delete('/force-delete/{id}', [CompaniesController::class,'forceDeleted'])->name('companies.delete');
    Route::get('/change-status/{id}', [CompaniesController::class,'ChangeStatus'])->name('companies.status');
});
