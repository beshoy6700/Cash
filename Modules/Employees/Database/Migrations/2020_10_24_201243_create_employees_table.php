<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEmployeesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->id();
            $table->string('code')->unique();
            $table->string('name')->unique();
            $table->boolean('gender')->comment('value 1 male value 2 female');
            $table->boolean('status')->default(1)->comment('1 in active 0 not active');
            $table->date('date_birth')->nullable();
            $table->string('mobile')->unique();
            $table->string('collage')->nullable();
            $table->text('address')->nullable();
            $table->string('email')->unique()->nullable();
            $table->bigInteger('social_status_id')->unsigned();
            $table->foreign('social_status_id')->references('id')->on('social_status')->onDelete('cascade')->onUpdate('cascade');
            $table->string('image')->nullable();
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
        Schema::dropIfExists('employees');
    }
}
