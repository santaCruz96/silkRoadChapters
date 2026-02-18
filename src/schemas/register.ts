import { RegisterData } from '@/types/api/auth';

export type FormErrors = Partial<Record<keyof RegisterData | 'agreement', string>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DATE_REGEX = /^\d{2}\.\d{2}\.\d{4}$/;

export function validateRegisterForm(
    data: RegisterData, 
    isAgreed: boolean,
    messages: { 
        nameLength: string; 
        birthdayFormat: string; 
        birthdayFuture: string;
        emailRequired: string;
        emailValid: string;
        passwordRequired: string;
        passwordLength: string;
        passwordValid: string;
        repeatPassword: string;
        repeatPasswordValid: string;
        agreement: string
    }
): FormErrors {
    const errors: FormErrors = {};

    if (data.fullName && data.fullName.trim().length < 2) {
        errors.fullName = messages.nameLength;
    }

    if (data.dateOfBirth && !DATE_REGEX.test(data.dateOfBirth)) {
        errors.dateOfBirth = messages.birthdayFormat;
    } else if (data.dateOfBirth) {
        const [day, month, year] = data.dateOfBirth.split('.').map(Number);
        const date = new Date(year, month - 1, day);
        const now = new Date();
        if (date >= now) {
            errors.dateOfBirth = messages.birthdayFuture;
        }
    }

    if (!data.email) {
        errors.email = messages.emailRequired;
    } else if (!EMAIL_REGEX.test(data.email)) {
        errors.email = messages.emailValid;
    }

    if (!data.password) {
        errors.password = messages.passwordRequired;
    } else if (data.password.length < 8) {
        errors.password = messages.passwordLength;
    } else if (!/[a-zA-Zа-яА-Я]/.test(data.password) || !/\d/.test(data.password)) {
        errors.password = messages.passwordValid;
    }

    if (!data.repeatPassword) {
        errors.repeatPassword = messages.repeatPassword;
    } else if (data.password !== data.repeatPassword) {
        errors.repeatPassword = messages.repeatPasswordValid;
    }

    if (!isAgreed) {
        errors.agreement = messages.agreement;
    }

    return errors;
}