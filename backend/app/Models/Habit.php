<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\HabitLog;

class Habit extends Model
{
    use HasFactory;

    protected $table = 'table_habit'; // The table we are connected this to

    protected $fillable = [
        
       'user_id',
       'habitName'
       
    
    ];

    public function user()
    {
            return $this->belongsTo(User::class);
    }


    public function logs()
    {
        return $this->hasMany(HabitLog::class);
    }
}
