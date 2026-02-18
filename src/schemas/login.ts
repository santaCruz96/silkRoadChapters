export interface FormErrors {
    email?: string;
    password?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateLoginForm(
    email: string,
    password: string,
    messages: { emailRequired: string; emailValid: string; passwordRequired: string }
): FormErrors {
    const errors: FormErrors = {};

    if (!email) {
        errors.email = messages.emailRequired;
    } else if (!EMAIL_REGEX.test(email)) {
        errors.email = messages.emailValid;
    }

    if (!password) {
        errors.password = messages.passwordRequired;
    }

    return errors;
}