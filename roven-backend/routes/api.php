<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\OrderItemController;
use App\Http\Controllers\Api\ReviewController;
use App\Http\Controllers\Api\WishlistController;
use App\Http\Controllers\Api\PaymentController;

// Users API Routes

// Order Items API Routes
Route::apiResource('order-items', OrderItemController::class);

// Reviews API Routes
Route::apiResource('reviews', ReviewController::class);

// Wishlists API Routes
Route::apiResource('wishlists', WishlistController::class);

// Payments API Routes
Route::apiResource('payments', PaymentController::class);
