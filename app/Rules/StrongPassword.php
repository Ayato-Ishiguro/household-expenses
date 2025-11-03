<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class StrongPassword implements Rule
{
    public function passes($attribute, $value): bool|int
    {
        // 例: 8文字以上、英大文字・小文字・数字・記号を含む
        return preg_match('/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[\]{};\':"\\\\|,.<>\/\?]).{8,}$/', $value);
    }

    public function message(): string
    {
        return 'パスワードは8文字以上で、英大文字・小文字・数字・記号を含めてください。';
    }
}
