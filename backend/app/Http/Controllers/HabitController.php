<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HabitController extends Controller
{
    

    public function index()
    {
        $habits = Habit::all(); 
        return response()->json($habits);
    }


}
