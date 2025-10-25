import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { labels } from "@/labels";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="name" value={labels.register.name} />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
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
                        onChange={(e) => setData("lastName", e.target.value)}
                        required
                    />
                </div>

                <div className="mt-4">
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
                        onChange={(e) => setData("firstName", e.target.value)}
                        required
                    />
                </div>

                {lang === "ja" && (
                    <>
                        <div className="mt-4">
                            <InputLabel
                                htmlFor="lastNameKana"
                                value={labels.register.firstNameKana}
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
                                required
                            />
                        </div>

                        <div className="mt-4">
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
                                required
                            />
                        </div>
                    </>
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
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
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
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value={labels / register.passwordConfirmation}
                    />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                        required
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>

                <div className="mt-4 flex items-center justify-end">
                    <Link
                        href={route("login")}
                        className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        {labels.register.alreadyRegisterd}
                    </Link>

                    <PrimaryButton className="ms-4" disabled={processing}>
                        {labels.register.register}
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
