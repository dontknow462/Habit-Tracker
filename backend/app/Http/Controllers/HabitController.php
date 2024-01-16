<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Habit;
use App\Models\HabitLog;


class HabitController extends Controller
{
    

    public function index()
    {
        $habits = Habit::all(); 
        return response()->json($habits);
    }


    public function createAndLog(Request $request)
    {
            // $request->validate([
            //     'user_id'=> 'string', //'required|exists:users_id'
            //     'habitName'=> 'string',
            //     'date'=>'string', //'required|date'
            //     'completed'=>'string' //'required|boolean'
            // ]);
        
        $user = User::findOrFail($request->user_id);
        
        $habit = $user->habits()->create([
            'habitName'=>$request->name
        ]);

        $habit->logs()->create([
            'date'=> $request->date,
            'completed'=>$request->completed
        ]);

        return response()->json(['message' => 'Habit created and logged successfully'], 201);

    }

 
    

}