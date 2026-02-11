import { API_URL } from '@/config/constants'
import { LoginData, LoginResponse } from '@/types/api/auth';
import { authCookies } from '@/lib/cookies';

export async function loginUser(data: LoginData): Promise<LoginResponse> {
    const res = await fetch(`${API_URL}/accounts/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    
    if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Ошибка входа');
    }
    
    return res.json();
}

export async function refreshAccessToken(): Promise<{ accessToken: string } | null> {
    const refreshToken = authCookies.getRefreshToken();
    
    if (!refreshToken) {
        return null;
    }
    
    const res = await fetch(`${API_URL}/accounts/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ refreshToken }),
    });
    
    if (!res.ok) {
        throw new Error('Failed to refresh token');
    }
    
    return res.json();
}