import { Labels } from "./types";

const ja: Labels = {
    login: {
        login: "ログイン",
        register: "新規登録はこちら",
        forgotPassword: "パスワードをお忘れですか？",
        email: "メールアドレス",
        password: "パスワード",
        rememberMe: "ログイン状態を保持する",
    },
    register: {
        name: "名前",
        lastName: "名前（姓）",
        firstName: "名前（名）",
        lastNameKana: "姓（カナ）",
        firstNameKana: "名（カナ）",
        email: "メールアドレス",
        password: "パスワード",
        passwordConfirmation: "パスワード（確認用）",
        alreadyRegistered: "すでに登録済みですか？",
        register: "登録",
        validations: {
            lastNameRequired: "姓は必須です",
            lastNameMax: "姓は255文字以内で入力してください",
            firstNameRequired: "名は必須です",
            firstNameMax: "名は255文字以内で入力してください",
            lastNameKanaRequired: "姓（カナ）は必須です",
            lastNameKanaMax: "姓（カナ）は255文字以内で入力してください",
            lastNameKanaFormat: "姓（カナ）は全角カタカナで入力してください",
            firstNameKanaRequired: "名（カナ）は必須です",
            firstNameKanaMax: "名（カナ）は255文字以内で入力してください",
            firstNameKanaFormat: "名（カナ）は全角カタカナで入力してください",
            emailRequired: "メールアドレスは必須です",
            emailFormat: "メールアドレスの形式が正しくありません",
            passwordRequired: "パスワードは必須です",
            passwordConfirmationNotMatch: "パスワードが一致しません",
        },
    },
};

export default ja;
