<?php


namespace App\Services\User;

use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserService implements UserServiceInterface
{
    public function register(array $data): User
    {
        return User::create([
            'last_name' => $data['last_name'],
            'first_name' => $data['first_name'],
            'last_name_kana' => $data['last_name_kana'] ?? null,
            'first_name_kana' => $data['first_name_kana'] ?? null,
            'name' => $data['last_name'] . ' ' . $data['first_name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password'])
        ]);
    }
}
