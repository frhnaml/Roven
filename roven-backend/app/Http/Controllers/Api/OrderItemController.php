<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\OrderItem;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class OrderItemController extends Controller
{
    /**
     * Display a listing of order items.
     */
    public function index(): JsonResponse
    {
        $orderItems = OrderItem::with(['order', 'product'])->paginate(10);

        return response()->json([
            'status' => 'success',
            'data' => $orderItems,
        ]);
    }

    /**
     * Store a newly created order item.
     */
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'order_id' => 'required|exists:orders,order_id',
            'product_id' => 'required|exists:products,product_id',
            'quantity' => 'required|integer|min:1',
            'price' => 'required|numeric|min:0',
        ]);

        $orderItem = OrderItem::create([
            'order_id' => $validated['order_id'],
            'product_id' => $validated['product_id'],
            'quantity' => $validated['quantity'],
            'price' => $validated['price'],
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Order item created successfully',
            'data' => $orderItem,
        ], 201);
    }

    /**
     * Display the specified order item.
     */
    public function show(OrderItem $orderItem): JsonResponse
    {
        $orderItem->load(['order', 'product']);

        return response()->json([
            'status' => 'success',
            'data' => $orderItem,
        ]);
    }

    /**
     * Update the specified order item.
     */
    public function update(Request $request, OrderItem $orderItem): JsonResponse
    {
        $validated = $request->validate([
            'quantity' => 'nullable|integer|min:1',
            'price' => 'nullable|numeric|min:0',
        ]);

        $orderItem->update($validated);

        return response()->json([
            'status' => 'success',
            'message' => 'Order item updated successfully',
            'data' => $orderItem,
        ], 200);
    }

    /**
     * Remove the specified order item.
     */
    public function destroy(OrderItem $orderItem): JsonResponse
    {
        $orderItem->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Order item deleted successfully',
        ]);
    }
}
