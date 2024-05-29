<?php

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
Route::domain(env('APP_MAIN_HOST'))->group(function () {

    Route::group(['prefix' => 'admin'], function () {
        Voyager::routes();
    });
    Route::get('/', function () {
        return view('home');
    });
});
