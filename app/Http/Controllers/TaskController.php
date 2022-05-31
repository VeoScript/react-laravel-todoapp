<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use App\Models\Tasks;

class TaskController extends Controller
{   
    public function show(Request $request, Tasks $tasks)
    {
        // $allTasks = $tasks->all(); -- code for displaying all data without orderby
        $allTasks = $tasks->orderBy('id', 'desc')->get();
        return response()->json([
            'tasks' => $allTasks
        ]);
    } 

    public function store(Request $request)
    {
        $status = 'Undone';

        $tasks = new Tasks;
        $tasks->task = $request->task;
        $tasks->type = $request->type;
        $tasks->status = $status;
        $tasks->save();
        
        return Redirect::route('home');
    }

    public function update(Request $request, $id)
    {
        $tasks = Tasks::findOrFail($id);
        $tasks->status = $request->input('status');
        $tasks->update();

        return response()->json($tasks->find($tasks->id));
    }

    public function destroy($id)
    {
        Tasks::findOrFail($id)->delete();
    }
}
