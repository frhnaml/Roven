<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Str;

class CategoryController extends Controller
{
    /**
     * Display a listing of categories
     */
    public function index(): JsonResponse
    {
        $categories = Category::withCount('products')->paginate(10);
        
        return response()->json([
            'status' => 'success',
            'data' => $categories,
        ]);
    }

    /**
     * Store a newly created category
     */
    public function store(Request $request)
    {

        $validatedData = $request->validate([
            'category_name' => 'nullable|string|max:255',
            'description' => 'nullable|string',
        ]);

        // Create the product
        $category = Category::create([
            'category_name' => $validatedData['category_name'],
            'description' => $validatedData['description'],
        ]);

        return response()->json($category, 201);
    }

    /**
     * Display the specified category
     */
    public function show(Category $category): JsonResponse
    {
        return response()->json([
            'status' => 'success',
            'data' => $category->load(['products' => function($query) {
                $query->select('product_id', 'category_id', 'name', 'price');
            }])
        ]);
    }

    /**
     * Update the specified category
     */
    public function update(Request $request, Category $category)
    {
        $validated = $request->validate([
            'category_name' => 'sometimes|required|max:255|unique:categories,category_name,' . $category->category_id . ',category_id',
            'description' => 'nullable|string',
        ]);

        // Update the category
        $category->update([
            'category_name' => $validated['category_name'] ?? $category->category_name,
            'description' => $validated['description'] ?? $category->description,
        ]);

        return response()->json($category);
    }

    /**
     * Remove the specified category
     */
    public function destroy(Category $category): JsonResponse
    {
        // Check if category has products
        if ($category->products()->exists()) {
            return response()->json([
                'status' => 'error',
                'message' => 'Cannot delete category with associated products'
            ], 422);
        }

        $category->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Category deleted successfully'
        ]);
    }
}