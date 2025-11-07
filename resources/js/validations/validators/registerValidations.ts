import { Labels } from "@/labels/types";
import {
    getRegisterSchema,
    RegisterForm,
} from "@/validations/schemas/registerSchema";

export function validateRegisterForm(
    data: RegisterForm,
    labels: Labels["register"],
    lang: "ja" | "en" = "ja"
): Partial<Record<keyof RegisterForm, string>> {
    const schema = getRegisterSchema(labels, lang);
    const result = schema.safeParse(data);

    if (result.success) return {};

    const errors: Partial<Record<keyof RegisterForm, string>> = {};
    result.error.issues.forEach((err) => {
        if (typeof err.path[0] === "string") {
            errors[err.path[0] as keyof RegisterForm] = err.message ?? "";
        }
    });
    return errors;
}
