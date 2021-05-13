<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateJobTitleTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('job_title', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('job_structure_id')->unsigned();
            $table->foreign('job_structure_id')->references('id')->on('job_structure')->onDelete('cascade')->onUpdate('cascade');
            $table->text('title')->nullable();
            $table->text('description')->nullable();
            $table->text('basic_salary')->nullable();
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
        Schema::dropIfExists('job_title');
    }
}
