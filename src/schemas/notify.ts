export interface NotifyFormErrors {
    email?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateNotifyForm(
    email: string,
    messages: { emailRequired: string; emailValid: string }
): NotifyFormErrors {
    const errors: NotifyFormErrors = {};

    if (!email) {
        errors.email = messages.emailRequired;
    } else if (!EMAIL_REGEX.test(email)) {
        errors.email = messages.emailValid;
    }

    return errors;
}
