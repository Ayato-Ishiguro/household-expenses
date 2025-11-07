export type Labels = {
    login: {
        login: string;
        register: string;
        forgotPassword: string;
        email: string;
        password: string;
        rememberMe: string;
    };
    register: {
        name: string;
        lastName: string;
        firstName: string;
        lastNameKana?: string;
        firstNameKana?: string;
        email: string;
        password: string;
        passwordConfirmation: string;
        alreadyRegistered: string;
        register: string;
        passwordStrongDescription: string;
    };
};
