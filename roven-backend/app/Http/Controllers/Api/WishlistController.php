<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Wishlist;
use Illuminate\Http\Request;

class WishlistController extends Controller
{
    public function index()
    {
        return response()->json(Wishlist::with(['user', 'product'])->get(), 200);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'user_id' => 'required|exists:users,id',
            'product_id' => 'required|exists:products,product_id',
        ]);

        $wishlist = Wishlist::create($validated);
        return response()->json($wishlist, 201);
    }

    public function show(string $id)
    {
        $wishlist = Wishlist::findOrFail($id);
        return response()->json($wishlist, 200);
    }

    public function destroy(string $id)
    {
        $wishlist = Wishlist::findOrFail($id);
        $wishlist->delete();
        return response()->json(['message' => 'Wishlist item deleted successfully'], 200);
    }
}
