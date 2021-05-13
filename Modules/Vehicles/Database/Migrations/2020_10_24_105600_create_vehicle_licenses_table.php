<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVehicleLicensesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vehicle_licenses', function (Blueprint $table) {
            $table->id();
            $table->date('date')->comment('تاريخ التحرير');
            $table->date('date_licenses')->comment(' نهاية الترخيص');
            $table->date('date_check')->comment(' تاريخ الفحص');
            $table->string('name')->comment('اسم ادارة المرور');
            $table->bigInteger('vehicle_id')->nullable()->unsigned();
            $table->foreign('vehicle_id')->references('id')->on('vehicles')->onDelete('set null');
            $table->string('photo');
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
        Schema::dropIfExists('vehicle_licenses');
    }
}
