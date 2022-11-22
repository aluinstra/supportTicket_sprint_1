<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\TicketController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('categories', [CategoryController::class, 'index']);
Route::post('/categories/create', [CategoryController::class, 'store']);
Route::get('categories/{category}', [CategoryController::class, 'show']);
Route::post('categories/{category}', [CategoryController::class, 'update']);
Route::delete('categories/{category}', [CategoryController::class, 'destroy']);

Route::get('tickets', [TicketController::class, 'index']);
Route::post('/tickets/create', [TicketController::class, 'store']);
Route::get('tickets/{ticket}', [TicketController::class, 'show']);
Route::post('tickets/{ticket}', [TicketController::class, 'update']);
Route::delete('tickets/{ticket}', [TicketController::class, 'destroy']);

Route::get('users', [UserController::class, 'index']);
Route::post('/users/create', [UserController::class, 'store']);
Route::get('users/{user}', [UserController::class, 'show']);
Route::post('users/{user}', [UserController::class, 'update']);
Route::delete('users/{user}', [UserController::class, 'destroy']);