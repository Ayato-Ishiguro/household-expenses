import { commonValidationsEn } from "@/labels/common/commonValidation.en";
import { commonValidations } from "@/labels/common/commonValidation.ja";
import { Labels } from "@/labels/types";

export type RegisterForm = {
    lastName: string;
    firstName: string;
    lastNameKana?: string;
    firstNameKana?: string;
    email: string;
    password: string;
    passwordConfirmation: string;
};

export type RegisterFormErrors = Partial<Record<keyof RegisterForm, string>>;

const maxLength = (value: string | undefined, max: number) =>
    value !== undefined && value.length > max;

const isKana = (value: string | undefined) =>
    value !== undefined && /^[ァ-ヶー　]+$/u.test(value);

const isStrongPassword = (value: string | undefined) =>
    value !== undefined &&
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?]).{8,}$/.test(
        value
    );

function getCommonValidations(lang: string) {
    return lang === "ja" ? commonValidations : commonValidationsEn;
}

export function validateRegisterForm(
    data: RegisterForm,
    labels: Labels["register"],
    lang: string = "ja"
): RegisterFormErrors {
    const errors: RegisterFormErrors = {};
    const common = getCommonValidations(lang);
    // 姓
    if (!data.lastName) {
        errors.lastName = common.required.replace("{field}", labels.lastName);
    }
    if (data.lastName && maxLength(data.lastName, 255)) {
        errors.lastName = common.max.replace("{field}", labels.lastName);
    }
    // 名
    if (!data.firstName) {
        errors.firstName = common.required.replace("{field}", labels.firstName);
    }
    if (data.firstName && maxLength(data.firstName, 255)) {
        errors.firstName = common.max.replace("{field}", labels.firstName);
    }
    // カナ（日本語のみ）
    if (lang === "ja") {
        if (!data.lastNameKana) {
            errors.lastNameKana = common.required.replace(
                "{field}",
                labels.lastNameKana ?? "姓（カナ）"
            );
        }
        if (data.lastNameKana && maxLength(data.lastNameKana, 255)) {
            errors.lastNameKana = common.max.replace(
                "{field}",
                labels.lastNameKana ?? "姓（カナ）"
            );
        }
        if (data.lastNameKana && !isKana(data.lastNameKana)) {
            errors.lastNameKana = common.kanaFormat.replace(
                "{field}",
                labels.lastNameKana ?? "姓（カナ）"
            );
        }

        if (!data.firstNameKana) {
            errors.firstNameKana = common.required.replace(
                "{field}",
                labels.firstNameKana ?? "名（カナ）"
            );
        }
        if (data.firstNameKana && maxLength(data.firstNameKana, 255)) {
            errors.firstNameKana = common.max.replace(
                "{field}",
                labels.firstNameKana ?? "名（カナ）"
            );
        }
        if (data.firstNameKana && !isKana(data.firstNameKana)) {
            errors.firstNameKana = common.kanaFormat.replace(
                "{field}",
                labels.firstNameKana ?? "名（カナ）"
            );
        }
    }
    // メール
    if (!data.email) {
        errors.email = common.required.replace("{field}", labels.email);
    }
    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        errors.email = common.emailFormat;
    }

    // パスワード
    if (!data.password) {
        errors.password = common.required.replace("{field}", labels.password);
    }
    if (data.password && !isStrongPassword(data.password)) {
        errors.password = common.passwordStrong;
    }
    if (data.password !== data.passwordConfirmation) {
        errors.passwordConfirmation = common.passwordConfirmationNotMatch;
    }

    return errors;
}
