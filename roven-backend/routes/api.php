<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\UserController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::resource('products', ProductController::class);
Route::resource('category', CategoryController::class);
Route::resource('order', OrderController::class);
Route::resource('users', UserController::class);
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
