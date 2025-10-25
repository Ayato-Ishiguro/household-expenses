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

type RegisterValidationsLabels = NonNullable<Labels["register"]>["validations"];

const maxLength = (value: string | undefined, max: number) =>
    value !== undefined && value.length > max;

const isKana = (value: string | undefined) =>
    value !== undefined && /^[ァ-ヶー　]+$/u.test(value);

export function validateRegisterForm(
    data: RegisterForm,
    labels: RegisterValidationsLabels,
    lang: string = "ja"
): RegisterFormErrors {
    const errors: RegisterFormErrors = {};

    if (!data.lastName) {
        errors.lastName = labels.lastNameRequired;
    }
    if (data.lastName && maxLength(data.lastName, 255)) {
        errors.lastName = labels.lastNameMax;
    }

    if (!data.firstName) {
        errors.firstName = labels.firstNameRequired;
    }
    if (data.firstName && maxLength(data.firstName, 255)) {
        errors.firstName = labels.firstNameMax;
    }

    if (lang === "ja") {
        if (!data.lastNameKana) {
            errors.lastNameKana = labels.lastNameKanaRequired;
        }
        if (data.lastNameKana && maxLength(data.lastNameKana, 255)) {
            errors.lastNameKana = labels.lastNameKanaMax;
        }
        if (data.lastNameKana && !isKana(data.lastNameKana)) {
            errors.lastNameKana = labels.lastNameKanaFormat;
        }

        if (!data.firstNameKana) {
            errors.firstNameKana = labels.firstNameKanaRequired;
        }
        if (data.firstNameKana && maxLength(data.firstNameKana, 255)) {
            errors.firstNameKana = labels.firstNameKanaMax;
        }
        if (data.firstNameKana && !isKana(data.firstNameKana)) {
            errors.firstNameKana = labels.firstNameKanaFormat;
        }
    }

    if (!data.email) {
        errors.email = labels.emailRequired;
    }
    if (data.email && !/^[\w\-.]+@[\w\-.]+\.[a-zA-Z]{2,}$/.test(data.email)) {
        errors.email = labels.emailFormat;
    }

    if (!data.password) {
        errors.password = labels.passwordRequired;
    }
    if (data.password !== data.passwordConfirmation) {
        errors.passwordConfirmation = labels.passwordConfirmationNotMatch;
    }

    return errors;
}
