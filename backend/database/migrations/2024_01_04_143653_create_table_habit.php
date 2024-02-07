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

            $table->string('habitName');

            $table->unsignedBigInteger('user_id'); // Add this line to create the 'user_id' column
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');; // //without cascade, it doesnt let me delete its parent 




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
