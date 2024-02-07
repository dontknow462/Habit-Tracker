<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Habit;
use App\Models\HabitLog;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;

class HabitController extends Controller
{
    public function index()
    {
        // $habits = Habit::all(); 
        
        return response()->json($habits);
        // Log::info(response()->json($habits));

    }

    public function getUserHabits($userId)
    {
        $user = User::where('id', $userId)->firstOrFail();
        $habits= $user->habits()
        ->select('id', 'user_id', 'habitName')
        ->with('logs:id,habit_id,date,completed,created_at,updated_at')
        ->get();

        return response()->json($habits);
    }

    public function createAndLog(Request $request)
    {
        // Log::info($request->all()['habit']['email']);
        // Log::info($request->all()['habit']['habitName']);
        // Log::info($request->all()['habit']['date']);
        // Log::info($request->all()['habit']['completed']);



        $userEmail = $request->all()['habit']['email'];
        $user = User::where('email', $userEmail)->firstOrFail();

        $habit = $user->habits()->create([
            'habitName' => $request->all()['habit']['habitName']
        ]);

        $habit->logs()->create([
            'date' => $request->all()['habit']['date'],
            'completed' => $request->all()['habit']['completed']
        ]);

        return response()->json(['message' => 'Habit created and logged successfully'], 201);
    }
}
