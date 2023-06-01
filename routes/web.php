<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CranstonController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/cranstonforms', function () {
    return view('cranstonforms');
});


Route::controller(CranstonController::class)->group(function () {
    Route::get('/test/{id}', 'show');
});

Route::controller(CranstonController::class)->group(function () {
    Route::get('/cranston/', 'cranston');
});

Route::controller(CranstonController::class)->group(function () {
    Route::post('store', 'CranstonController@store');
    Route::post('submitrequest', 'CranstonController@submit');
});



