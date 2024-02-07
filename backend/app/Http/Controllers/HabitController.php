<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Habit;
use App\Models\HabitLog;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Illuminate\Support\Facades\dd;

class HabitController extends Controller
{
    public function index()
    {
        $habits = Habit::all(); 
        
        return response()->json($habits);
        // Log::info(response()->json($habits));

    }

    public function getUserHabits($userId)
    {
        $user = User::where('id', $userId)->firstOrFail();
        $habits= $user->habits()    //recalling the habits function which contains "User has many habits" in User Model
        ->select('id', 'user_id', 'habitName')
        ->with('logs:id,habit_id,date,completed,created_at,updated_at') // this Some how calls the logs function in Habit Model
        ->get();

        return response()->json($habits);
    }

    public function createAndLog(Request $request)
    {
        
       $currentDate = Carbon::now()->format('Y-m-d');

       $habitName= $request->input('habit.habitName');
    //    dd($habitName);                               // dd() here doesnt work because I am not sending data instead receiving and posting
       $exitingHabit = Habit::where('habitName', $habitName)->first();

        if($exitingHabit){
            return response()->json(['message'=> "HabitName '$habitName' already exists"], 409);
        }


       
        $userEmail = $request->all()['habit']['email'];
        $user = User::where('email', $userEmail)->firstOrFail();    // if I dont use it like this and instead use findadnfail it gives error

        $habit = $user->habits()->create([
            'habitName' => $request->all()['habit']['habitName']    
        ]);

        $habit->logs()->create([
            'date' => $currentDate,
            'completed' => $request->all()['habit']['completed']
        ]);

        return response()->json(['message' => 'Habit created and logged successfully'], 201);
    }
}
