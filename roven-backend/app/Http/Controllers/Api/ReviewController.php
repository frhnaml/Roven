<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Review;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    public function index()
    {
        return response()->json(Review::with(['user', 'product'])->get(), 200);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'user_id' => 'required|exists:users,id',
            'product_id' => 'required|exists:products,product_id',
            'rating' => 'required|integer|between:1,5',
            'comment' => 'nullable|string',
        ]);

        $review = Review::create($validated);
        return response()->json($review, 201);
    }

    public function show(string $id)
    {
        $review = Review::findOrFail($id);
        return response()->json($review, 200);
    }

    public function update(Request $request, string $id)
    {
        $validated = $request->validate([
            'rating' => 'integer|between:1,5',
            'comment' => 'nullable|string',
        ]);

        $review = Review::findOrFail($id);
        $review->update($validated);
        return response()->json($review, 200);
    }

    public function destroy(string $id)
    {
        $review = Review::findOrFail($id);
        $review->delete();
        return response()->json(['message' => 'Review deleted successfully'], 200);
    }
}
