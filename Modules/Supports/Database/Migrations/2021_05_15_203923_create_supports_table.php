<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSupportsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('supports', function (Blueprint $table) {
            $table->id();
            $table->dateTime('date');
            $table->string('title');
            $table->string('code')->nullable();
            $table->string('attach')->nullable();
            $table->text('subject')->nullable();
            $table->bigInteger('type_support_id')->unsigned();
            $table->foreign('type_support_id')->references('id')->on('type_supports')->onDelete('cascade')->onUpdate('cascade');
            $table->boolean('status')->default(1)->comment('1 in active 0 not active');
            $table->bigInteger('status_support_id')->unsigned();
            $table->foreign('status_support_id')->references('id')->on('status_supports')->onDelete('cascade')->onUpdate('cascade');
            $table->bigInteger('company_id')->unsigned();
            $table->foreign('company_id')->references('id')->on('companies')->onDelete('cascade')->onUpdate('cascade');
            $table->bigInteger('user_id')->unsigned()->nullable();
            $table->foreign('user_id')->references('id')->on('users');
            $table->bigInteger('admin_id')->unsigned()->nullable();
            $table->foreign('admin_id')->references('id')->on('admins');
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
        Schema::dropIfExists('supports');
    }
}
