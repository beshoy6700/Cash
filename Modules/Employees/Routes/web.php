<?php

use Modules\Employees\Http\Controllers\EmployeesController;
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

Route::group(['prefix' => 'employees', 'middleware' => 'auth'], function () {
    Route::get('/', [EmployeesController::class,'index'])->name('employees');
    Route::get('/active-list', [EmployeesController::class,'activeList'])->name('employees.activeList');
    Route::get('/create', [EmployeesController::class,'create'])->name('employees.create');
    Route::post('/store', [EmployeesController::class,'store'])->name('employees.store');
    Route::get('/show/{id}', [EmployeesController::class,'show'])->name('employees.show');
    Route::get('/edit/{id}', [EmployeesController::class,'edit'])->name('employees.edit');
    Route::patch('/update/{id}', [EmployeesController::class,'update'])->name('employees.update');
    Route::get('/restore/{id}', [EmployeesController::class,'restore'])->name('employees.restore');
    Route::delete('/delete/{id}', [EmployeesController::class,'destroy'])->name('employees.destroy');
    Route::delete('/force-delete/{id}', [EmployeesController::class,'forceDeleted'])->name('employees.delete');
    Route::get('/change-status/{id}', [EmployeesController::class,'ChangeStatus'])->name('employees.status');
});
