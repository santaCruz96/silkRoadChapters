export interface FormErrors {
    password?: string;
    repeatPassword?: string;
}

export function validateResetPasswordForm(
    password: string,
    repeatPassword: string,
    messages: { 
        passwordRequired: string;
        passwordLength: string;
        passwordValid: string;
        repeatPassword: string;
        repeatPasswordValid: string; 
    }
): FormErrors {
    const errors: FormErrors = {};

    if (!password) {
        errors.password = messages.passwordRequired;
    } else if (password.length < 8) {
        errors.password = messages.passwordLength;
    } else if (!/[a-zA-Zа-яА-Я]/.test(password) || !/\d/.test(password)) {
        errors.password = messages.passwordValid;
    }

    if (!repeatPassword) {
        errors.repeatPassword = messages.repeatPassword;
    } else if (password !== repeatPassword) {
        errors.repeatPassword = messages.repeatPasswordValid;
    }

    return errors;
}