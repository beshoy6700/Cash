<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEmployeeJobStructureTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employee_job_structure', function (Blueprint $table) {
            $table->id();
            $table->date('date_start');
            $table->date('date_end')->nullable();
            $table->bigInteger('employee_work_id')->unsigned();
            $table->foreign('employee_work_id')->references('id')->on('employee_work')->onDelete('cascade')->onUpdate('cascade');
            $table->bigInteger('job_structure_id')->unsigned();
            $table->foreign('job_structure_id')->references('id')->on('job_structure')->onDelete('cascade')->onUpdate('cascade');
            $table->bigInteger('employee_id')->unsigned();
            $table->foreign('employee_id')->references('id')->on('employees')->onDelete('cascade')->onUpdate('cascade');
            $table->bigInteger('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users');
            //$table->unique(['job_title_id','employee_id']);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('employee_job_title');
    }
}
