<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class OrderController extends Controller
{
    /**
     * Display a listing of orders
     */
    public function index(): JsonResponse
    {
        $orders = Order::with('user')->paginate(10);

        return response()->json([
            'status' => 'success',
            'data' => $orders,
        ]);
    }

    /**
     * Store a newly created order
     */
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'user_id' => 'required|exists:users,user_id',
            'total_amount' => 'required|numeric|min:0',
            'status' => 'nullable|in:pending,processed,shipped,delivered,cancelled',
        ]);

        $order = Order::create([
            'user_id' => $validated['user_id'],
            'total_amount' => $validated['total_amount'],
            'status' => $validated['status'] ?? 'pending',
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Order created successfully',
            'data' => $order,
        ], 201);
    }

    /**
     * Display the specified order
     */
    public function show(Order $order): JsonResponse
    {
        $order->load('user');

        return response()->json([
            'status' => 'success',
            'data' => $order,
        ]);
    }

    /**
     * Update the specified order
     */
    public function update(Request $request, Order $order): JsonResponse
    {
        $validated = $request->validate([
            'user_id' => 'nullable|exists:users,user_id',
            'total_amount' => 'nullable|numeric|min:0',
            'status' => 'nullable|in:pending,processed,shipped,delivered,cancelled',
        ]);

        $order->update($validated);

        return response()->json([
            'status' => 'success',
            'message' => 'Order updated successfully',
            'data' => $order,
        ], 200);
    }

    /**
     * Remove the specified order
     */
    public function destroy(Order $order): JsonResponse
    {
        $order->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Order deleted successfully',
        ]);
    }
}