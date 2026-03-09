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

export async function uploadAvatar(formData: FormData) {
    const response = await fetchWithAuth('/user/profile/avatar', {
        method: 'POST',
        body: formData
    })

    if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message ?? 'Upload failed')
    }

    return response.json()
}

export async function deleteAvatar(): Promise<{ success: boolean; error?: string }> {
    const response = await fetchWithAuth('/user/profile/avatar', {
        method: 'DELETE',
    })

    if (!response.ok) {
        const errorData = await response.json();
        return { success: false, error: errorData.message || 'Error' };
    }

    return { success: true };
}