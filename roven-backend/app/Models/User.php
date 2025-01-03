<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasFactory;

    protected $primaryKey = 'user_id';
    
    protected $fillable = [
        'name',
        'email',
        'password',
        'phone',
        'address',
        'role'
    ];

    public function orders()
    {
        return $this->hasMany(Order::class, 'user_id');
    }
}