<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use backend\app\Models\Habit;


class HabitLog extends Model
{
    use HasFactory;


    protected $table='habit_logs'; 

    protected $fillable = [
        'habit_id', 
        'date', 
        'completed'

    ];

    public function habit(){
        return $this->belongsTo(Habit::class);
    }

}
