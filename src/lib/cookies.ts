import Cookies from 'js-cookie';

export const authCookies = {
    setTokens: (accessToken: string, refreshToken: string) => {
        Cookies.set('access_token', accessToken, {
            expires: 1/24,
            sameSite: 'lax',
        });
        
        Cookies.set('refresh_token', refreshToken, {
            expires: 7,
            sameSite: 'lax',
        });
    },
    
    getAccessToken: () => {
        return Cookies.get('access_token');
    },
    
    getRefreshToken: () => {
        return Cookies.get('refresh_token');
    },
    
    removeTokens: () => {
        Cookies.remove('access_token');
        Cookies.remove('refresh_token');
    },
};