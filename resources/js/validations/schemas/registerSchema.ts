import { z } from "zod";
import { Labels } from "@/Labels/types";
import { commonValidations } from "@/Labels/common/commonValidation.ja";
import { commonValidationsEn } from "@/Labels/common/commonValidation.en";
import { kanaRegex, emailRegex, strongPasswordRegex } from "../utils/regex";

export type RegisterForm = {
    lastName: string;
    firstName: string;
    lastNameKana?: string;
    firstNameKana?: string;
    email: string;
    password: string;
    passwordConfirmation: string;
};

export function getRegisterSchema(
    labels: Labels["register"],
    lang: "ja" | "en" = "ja"
) {
    const common = lang === "ja" ? commonValidations : commonValidationsEn;
    return z
        .object({
            lastName: z
                .string()
                .min(1, {
                    message: common.required.replace(
                        "{field}",
                        labels.lastName
                    ),
                })
                .max(255, {
                    message: common.max.replace("{field}", labels.lastName),
                }),
            firstName: z
                .string()
                .min(1, {
                    message: common.required.replace(
                        "{field}",
                        labels.firstName
                    ),
                })
                .max(255, {
                    message: common.max.replace("{field}", labels.firstName),
                }),
            lastNameKana: z
                .string()
                .min(1, {
                    message: common.required.replace(
                        "{field}",
                        labels.lastNameKana ?? "姓（カナ）"
                    ),
                })
                .max(255, {
                    message: common.max.replace(
                        "{field}",
                        labels.lastNameKana ?? "姓（カナ）"
                    ),
                })
                .refine((val) => val === "" || kanaRegex.test(val), {
                    message: common.kanaFormat.replace(
                        "{field}",
                        labels.lastNameKana ?? "姓（カナ）"
                    ),
                }),
            firstNameKana: z
                .string()
                .min(1, {
                    message: common.required.replace(
                        "{field}",
                        labels.firstNameKana ?? "名（カナ）"
                    ),
                })
                .max(255, {
                    message: common.max.replace(
                        "{field}",
                        labels.firstNameKana ?? "名（カナ）"
                    ),
                })
                .refine((val) => val === "" || kanaRegex.test(val), {
                    message: common.kanaFormat.replace(
                        "{field}",
                        labels.firstNameKana ?? "名（カナ）"
                    ),
                }),
            email: z
                .string()
                .min(1, {
                    message: common.required.replace("{field}", labels.email),
                })
                .regex(emailRegex, { message: common.emailFormat }),
            password: z
                .string()
                .min(1, {
                    message: common.required.replace(
                        "{field}",
                        labels.password
                    ),
                })
                .refine((val) => val === "" || strongPasswordRegex.test(val), {
                    message: common.passwordStrong,
                }),
            passwordConfirmation: z.string().min(1, {
                message: common.required.replace(
                    "{field}",
                    labels.passwordConfirmation
                ),
            }),
        })
        .refine((data) => data.password === data.passwordConfirmation, {
            message: common.passwordConfirmationNotMatch,
            path: ["passwordConfirmation"],
        });
}
