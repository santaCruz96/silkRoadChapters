'use server'

import { fetchWithAuth } from './apiClient';

export async function getProfile() {
    const response = await fetchWithAuth('/user/profile');
    
    if (!response.ok) {
        throw new Error('Failed to fetch profile');
    }
    
    return response.json();
}

export async function getSavedLectures() {
    const response = await fetchWithAuth('/user/profile/favorites');
    
    if (!response.ok) {
        throw new Error('Failed to fetch profile');
    }
    
    return response.json();
}