<?php

namespace App\Http\Requests\Auth;

use App\Rules\StrongPassword;
use Illuminate\Foundation\Http\FormRequest;

class UserRegisterRequest extends FormRequest
{
    public function rules(): array
    {
        $rules = [
            'last_name' => ['required', 'string', 'max:255'],
            'first_name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:users,email'],
            'password' => ['required', 'confirmed', new StrongPassword()]
        ];

        // 日本語の時だけカナ欄をrequiredにする
        if ($this->header('Accept-Language') && str_starts_with($this->header('Accept-Language'), 'ja')) {
            $rules['last_name_kana'] = ['required', 'string', 'max:255'];
            $rules['first_name_kana'] = ['required', 'string', 'max:255'];
        }

        return $rules;
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'last_name' => $this->input('lastName'),
            'first_name' => $this->input('firstName'),
            'last_name_kana' => $this->input('lastNameKana'),
            'first_name_kana' => $this->input('firstNameKana'),
            'password_confirmation' => $this->input('passwordConfirmation'),
        ]);
    }
}
