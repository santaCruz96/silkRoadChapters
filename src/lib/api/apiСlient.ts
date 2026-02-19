import { 
    getAccessToken, 
    getRefreshToken, 
    setAuthCookies, 
    clearAuthCookies 
} from '../authCookies';
import { redirect } from 'next/navigation';
import { API_URL } from '@/config/constants';
import { RefreshResponse } from '@/types/api/auth';

export async function refreshTokens(): Promise<string> {
    const refreshToken = await getRefreshToken();

    if (!refreshToken) {
        throw new Error('No refresh token');
    }

    const res = await fetch(`${API_URL}/accounts/refresh`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ refreshToken }),
    });

    if (!res.ok) {
        await clearAuthCookies();
        redirect('/');
    }

    const data: RefreshResponse = await res.json();
    
    await setAuthCookies(data.accessToken, data.refreshToken);
    
    return data.accessToken;
}

export async function fetchWithAuth(url: string, options: RequestInit = {}) {
    const accessToken = await getAccessToken();

    const executeRequest = async (token: string | null) => {
        const headers = new Headers(options.headers);
        
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }

        return fetch(`${API_URL}${url}`, { ...options, headers });
    };
    
    let response = await executeRequest(accessToken ?? null);

    if (response.status === 401) {
        try {
            const newAccessToken = await refreshTokens();
            response = await executeRequest(newAccessToken);
        } catch {
            throw new Error('Unauthorized');
        }
    }

    return response;
}