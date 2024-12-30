<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Payment;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    public function index()
    {
        return response()->json(Payment::with('order')->get(), 200);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'order_id' => 'required|exists:orders,order_id',
            'payment_method' => 'required|in:credit_card,paypal,bank_transfer',
            'amount' => 'required|numeric|min:0',
        ]);

        $payment = Payment::create($validated);
        return response()->json($payment, 201);
    }

    public function show(string $id)
    {
        $payment = Payment::findOrFail($id);
        return response()->json($payment, 200);
    }

    public function destroy(string $id)
    {
        $payment = Payment::findOrFail($id);
        $payment->delete();
        return response()->json(['message' => 'Payment deleted successfully'], 200);
    }
}
