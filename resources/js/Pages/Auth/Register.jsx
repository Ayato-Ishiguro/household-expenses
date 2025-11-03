import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { useState } from "react";
import { validateRegisterForm } from "@/validations/registerValidation";
import ja from "@/labels/Auth/ja";
import en from "@/labels/Auth/en";

const initialForm = {
    lastName: "",
    firstName: "",
    lastNameKana: "",
    firstNameKana: "",
    email: "",
    password: "",
    passwordConfirmation: "",
};

const initialTouched = {
    lastName: false,
    firstName: false,
    lastNameKana: false,
    firstNameKana: false,
    email: false,
    password: false,
    passwordConfirmation: false,
};

export default function Register() {
    const lang = navigator.language.startsWith("ja") ? "ja" : "en";
    const labels = lang === "ja" ? ja : en;

    const { data, setData, post, processing, reset } = useForm(initialForm);
    const [clientErrors, setClientErrors] = useState({});
    const [touched, setTouched] = useState(initialTouched);

    const isFormValid =
        Object.values(data).every((v) => v && v.length > 0) &&
        Object.keys(clientErrors).length === 0;

    const submit = (e) => {
        e.preventDefault();
        const validationErrors = validateRegisterForm(
            data,
            labels.register.validations,
            lang
        );
        setClientErrors(validationErrors);
        if (Object.keys(validationErrors).length > 0) return;

        post(route("register"), {
            onFinish: () => reset("password", "passwordConfirmation"),
        });
    };

    const handleBlur = (field) => {
        setTouched((prev) => ({ ...prev, [field]: true }));
        const validationErrors = validateRegisterForm(
            data,
            labels.register,
            lang
        );
        setClientErrors(validationErrors);
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div className="flex gap-4">
                    <div className="flex-1">
                        <InputLabel
                            htmlFor="lastName"
                            value={labels.register.lastName}
                        />
                        <TextInput
                            id="lastName"
                            name="lastName"
                            value={data.lastName}
                            className="mt-1 block w-full"
                            autoComplete="lastName"
                            isFocused={true}
                            onChange={(e) =>
                                setData("lastName", e.target.value)
                            }
                            onBlur={() => handleBlur("lastName")}
                            required
                        />
                        <InputError
                            message={
                                touched.lastName ? clientErrors.lastName : ""
                            }
                            className="mt-2 text-red-600"
                        />
                    </div>
                    <div className="flex-1">
                        <InputLabel
                            htmlFor="firstName"
                            value={labels.register.firstName}
                        />
                        <TextInput
                            id="firstName"
                            name="firstName"
                            value={data.firstName}
                            className="mt-1 block w-full"
                            autoComplete="firstName"
                            onChange={(e) =>
                                setData("firstName", e.target.value)
                            }
                            onBlur={() => handleBlur("firstName")}
                            required
                        />
                        <InputError
                            message={
                                touched.firstName ? clientErrors.firstName : ""
                            }
                            className="mt-2 text-red-600"
                        />
                    </div>
                </div>

                {lang === "ja" && (
                    <div className="flex gap-4 mt-4">
                        <div className="flex-1">
                            <InputLabel
                                htmlFor="lastNameKana"
                                value={labels.register.lastNameKana}
                            />
                            <TextInput
                                id="lastNameKana"
                                name="lastNameKana"
                                value={data.lastNameKana}
                                className="mt-1 block w-full"
                                autoComplete="lastNameKana"
                                onChange={(e) =>
                                    setData("lastNameKana", e.target.value)
                                }
                                onBlur={() => handleBlur("lastNameKana")}
                                required
                            />
                            <InputError
                                message={
                                    touched.lastNameKana
                                        ? clientErrors.lastNameKana
                                        : ""
                                }
                                className="mt-2 text-red-600"
                            />
                        </div>
                        <div className="flex-1">
                            <InputLabel
                                htmlFor="firstNameKana"
                                value={labels.register.firstNameKana}
                            />
                            <TextInput
                                id="firstNameKana"
                                name="firstNameKana"
                                value={data.firstNameKana}
                                className="mt-1 block w-full"
                                autoComplete="firstNameKana"
                                onChange={(e) =>
                                    setData("firstNameKana", e.target.value)
                                }
                                onBlur={() => handleBlur("firstNameKana")}
                                required
                            />
                            <InputError
                                message={
                                    touched.firstNameKana
                                        ? clientErrors.firstNameKana
                                        : ""
                                }
                                className="mt-2 text-red-600"
                            />
                        </div>
                    </div>
                )}

                <div className="mt-4">
                    <InputLabel htmlFor="email" value={labels.register.email} />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData("email", e.target.value)}
                        onBlur={() => handleBlur("email")}
                        required
                    />

                    <InputError
                        message={touched.email ? clientErrors.email : ""}
                        className="mt-2 text-red-600"
                    />
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="password"
                        value={labels.register.password}
                    />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData("password", e.target.value)}
                        onBlur={() => handleBlur("password")}
                        required
                    />

                    <InputError
                        message={touched.password ? clientErrors.password : ""}
                        className="mt-2 text-red-600"
                    />
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="passwordConfirmation"
                        value={labels.register.passwordConfirmation}
                    />

                    <TextInput
                        id="passwordConfirmation"
                        type="password"
                        name="passwordConfirmation"
                        value={data.passwordConfirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData("passwordConfirmation", e.target.value)
                        }
                        onBlur={() => handleBlur("passwordConfirmation")}
                        required
                    />

                    <InputError
                        message={
                            touched.passwordConfirmation
                                ? clientErrors.passwordConfirmation
                                : ""
                        }
                        className="mt-2 text-red-600"
                    />
                </div>

                <div className="mt-4 flex items-center justify-end">
                    <Link
                        href={route("login")}
                        className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        {labels.register.alreadyRegisterd}
                    </Link>

                    <PrimaryButton
                        className="ms-4"
                        disabled={processing || !isFormValid}
                    >
                        {labels.register.register}
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
