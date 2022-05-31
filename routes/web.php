<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Routes for Pages
Route::inertia('/', 'Home')->name('home');
Route::inertia('/new', 'NewTask')->name('newtask');

// Routes for API Request Route
Route::get('show-task', [TaskController::class, 'show'])->name('task.show');
Route::post('add-task', [TaskController::class, 'store'])->name('task.store');