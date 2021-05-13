<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVehiclesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vehicles', function (Blueprint $table) {
            $table->id();
            $table->string('code')->unique();
            $table->string('name');
            $table->string('board_chr');
            $table->integer('board_num');
            $table->longText('description');
            $table->boolean('status')->default(1)->comment('1 in active 0 not active');
            $table->bigInteger('vehicle_type_id')->nullable()->unsigned();
            $table->foreign('vehicle_type_id')->references('id')->on('vehicle_type')->onDelete('cascade');
            $table->bigInteger('church_id')->nullable()->unsigned();
            $table->foreign('church_id')->references('id')->on('churches')->onDelete('cascade');
            $table->bigInteger('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users');
            $table->unique(['board_chr','board_num']);
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
        Schema::dropIfExists('vehicles');
    }
}
