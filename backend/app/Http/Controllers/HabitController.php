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
            $request->validate([
                'user_id'=> 'required|string', //'required|exists:users_id'
                'habitName'=> 'required|string',
                'date'=>'required|string', //'required|date'
                'completed'=>'required|string' //'required|boolean'
            ]);
        
        $user = User::findOrFail($request->user_id);
        
        $habit = $user->habits()->create([
            'habitName'=>$request->name
        ]);

        $habit->logs()->create([
            'date'=> $request->date,
            'completed'=>$request->completed
        ]);
    }

 


}