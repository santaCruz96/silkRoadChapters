'use server'

import { fetchWithAuth } from '../api/apiСlient';

export async function getProfile() {
    const response = await fetchWithAuth('/user/profile');
    
    if (!response.ok) {
        throw new Error('Failed to fetch profile');
    }
    
    return response.json();
}