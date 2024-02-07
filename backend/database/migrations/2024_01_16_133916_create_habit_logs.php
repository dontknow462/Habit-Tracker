<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHabitLogs extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('habit_logs', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('habit_id'); // Add this line to create the 'user_id' column
            $table->foreign('habit_id')->references('id')->on('table_habit')->onDelete('cascade'); // Ad

            $table->string('date');          // replace string with date later when comfortable 
            $table->string('completed');     // ->dedault(false); replace string with boolean later
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
        Schema::dropIfExists('habit_logs');
    }
}
