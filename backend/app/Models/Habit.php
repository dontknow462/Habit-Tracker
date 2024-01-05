<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Habit extends Model
{
    use HasFactory;

    protected $table = 'table_habit'; // The table we are connected this to

    protected $fillable = [
        'year',
        'month',
        'day',
        'habitName',
        'value'
    
    ];


}
