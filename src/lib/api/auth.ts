'use server';

import { redirect } from 'next/navigation';
import { setAuthCookies, clearAuthCookies } from '../authCookies';
import { API_URL } from '@/config/constants';
import { LoginData, LoginResponse, RegisterData } from '@/types/api/auth';

export async function loginUser(data: LoginData): Promise<{ success: boolean; error?: string }> {
    try {
        const res = await fetch(`${API_URL}/accounts/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        if (!res.ok) {
            const errorData = await res.json();
            return { success: false, error: errorData.message || 'Error' };
        }

        const responseData: LoginResponse = await res.json();

        if (responseData.accessToken && responseData.refreshToken) {
            await setAuthCookies(responseData.accessToken, responseData.refreshToken);
        }

        return { success: true };
    } catch (error) {
        console.error('Login error:', error);
        return { success: false, error: 'Server error' };
    }
}

export async function registerUser(data: RegisterData): Promise<{ success: boolean; error?: string }> {
    try {
        const payload = {
            email: data.email,
            password: data.password,
            dateOfBirth: data.dateOfBirth || null, 
            fullName: data.fullName || null, 
        };

        const res = await fetch(`${API_URL}/accounts/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        if (!res.ok) {
            const errorData = await res.json();
            return { success: false, error: errorData.message || 'Ошибка регистрации' };
        }

        return { success: true };
    } catch (error) {
        console.error('Register error:', error);
        return { success: false, error: 'Ошибка сервера' };
    }
}

export async function logoutUser() {
    await clearAuthCookies();
    redirect('/');
}