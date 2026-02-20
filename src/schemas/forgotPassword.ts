export interface FormErrors {
    email?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateForgotPasswordForm(
    email: string,
    messages: { emailRequired: string; emailValid: string; }
): FormErrors {
    const errors: FormErrors = {};

    if (!email) {
        errors.email = messages.emailRequired;
    } else if (!EMAIL_REGEX.test(email)) {
        errors.email = messages.emailValid;
    }
    return errors;
}