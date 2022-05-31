<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use App\Models\Tasks;

class TaskController extends Controller
{   
    public function show(Request $request, Tasks $tasks)
    {
        $allTasks = $tasks->all();
        return response()->json([
            'tasks' => $allTasks
        ]);
    } 

    public function store(Request $request)
    {
        $tasks = new Tasks;
        $tasks->task = $request->task;
        $tasks->type = $request->type;
        $tasks->save();
        
        return Redirect::route('home');
    }
}
