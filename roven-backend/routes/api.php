<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Api\OrderItemController;
use App\Http\Controllers\Api\ReviewController;
use App\Http\Controllers\Api\WishlistController;
use App\Http\Controllers\Api\PaymentController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::resource('products', ProductController::class);
Route::resource('category', CategoryController::class);
Route::resource('order', OrderController::class);
Route::resource('users', UserController::class);
Route::apiResource('order-items', OrderItemController::class);
Route::apiResource('reviews', ReviewController::class);
Route::apiResource('wishlists', WishlistController::class);
Route::apiResource('payments', PaymentController::class);
