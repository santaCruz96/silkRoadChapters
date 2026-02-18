export interface LoginData {
    email: string;
    password: string;
}

export interface LoginResponse {
    accessToken: string;
    refreshToken: string;
}

export type RefreshResponse = LoginResponse

export interface RegisterData {
    email: string;
    password: string;
    repeatPassword: string;
    dateOfBirth: string;
    fullName: string;
}