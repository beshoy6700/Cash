<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSerialEmployeeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('serial_employee', function (Blueprint $table) {
            $table->id();
            $table->string('serial_id')->unique();
            $table->boolean('status')->default(1)->comment('1 in active 0 not active');
            $table->bigInteger('employee_id')->unsigned();
            $table->foreign('employee_id')->references('id')->on('employees')->onDelete('cascade')->onUpdate('cascade');
            $table->bigInteger('serial_type_id')->unsigned();
            $table->foreign('serial_type_id')->references('id')->on('serial_type')->onDelete('cascade')->onUpdate('cascade');
            $table->string('from');
            $table->date('start_date');
            $table->date('expired_date')->nullable();
            $table->bigInteger('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users');
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
        Schema::dropIfExists('serial_employee');
    }
}
