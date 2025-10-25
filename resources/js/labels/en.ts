import { Labels } from "./types";

const en: Labels = {
    login: {
        login: "Log in",
        register: "Register here",
        forgotPassword: "Forgot your password?",
        email: "Email",
        password: "Password",
        rememberMe: "Remember me",
    },
    register: {
        name: "Name",
        lastName: "Last Name",
        firstName: "First Name",
        email: "Email",
        password: "Password",
        passwordConfirmation: "Confirm Password",
        alreadyRegistered: "Already registerd?",
        register: "Register",
        validations: {
            lastNameRequired: "Last name is required.",
            lastNameMax: "Last name must be 255 characters or less.",
            firstNameRequired: "First name is required.",
            firstNameMax: "First name must be 255 characters or less.",
            emailRequired: "Email is required.",
            emailFormat: "Invalid email format.",
            passwordRequired: "Password is required.",
            passwordConfirmationNotMatch: "Passwords do not match.",
        },
    },
};

export default en;
