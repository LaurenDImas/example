<?php

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

//API route for register new user
Route::post('/register', [App\Http\Controllers\Api\AuthController::class, 'register']);
//API route for login user
Route::post('/login', [App\Http\Controllers\Api\AuthController::class, 'login']);

//Protecting Routes
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/profile', function(Request $request) {
        // dd(auth()->user());
        return auth()->user();
    });

    // API route for logout user
    Route::post('/logout', [App\Http\Controllers\Api\AuthController::class, 'logout']);

    // API users
    Route::resource('users', App\Http\Controllers\Api\UserController::class, [
        'only' => ['index', 'show', 'store', 'update', 'destroy']
    ]);
    
    // API roles
    Route::resource('roles', App\Http\Controllers\Api\RoleController::class, [
        'only' => ['index','edit', 'show', 'store', 'update', 'destroy']
    ]);

    Route::get('/list-select-role', [App\Http\Controllers\Api\RoleController::class, 'listSelectRole']);

    
});
