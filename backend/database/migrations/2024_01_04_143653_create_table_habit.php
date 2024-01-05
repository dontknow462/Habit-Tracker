<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableHabit extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('table_habit', function (Blueprint $table) {
            $table->id();
            $table->string('year');
            $table->string('month');
            $table->string('day');
            $table->string('habitName');
            $table->string('value');
            $table->string('email');
            $table->foreign('email')->references('email')->on('users')->onDelete('cascade');



            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('table_habit');
    }
}
