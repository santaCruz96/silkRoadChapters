'use server'

import { fetchWithAuth } from './apiClient';
import { FavoriteItem } from '@/types/api/favorites';

export async function getFavorites(): Promise<FavoriteItem[]> {
    const res = await fetchWithAuth('/favorites');
    const data = await res.json();
    return data; 
}

export async function toggleFavorite(
    entityId: string,
    entityType: number,
    isFavorite: boolean
): Promise<{ status: number; data?: FavoriteItem }> {
    const res = await fetchWithAuth('/favorites', {
        method: isFavorite ? 'DELETE' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ entityId, entityType }),
    });

    if (!res.ok) {
        return { status: res.status };
    }

    const text = await res.text();
    const data = text ? JSON.parse(text) : undefined;
    return { status: res.status, data };
}

export async function deleteFavorite(entityId: string, entityType: number): Promise<{ success: boolean; error?: string }> {
    try {
        const response = await fetchWithAuth('/favorites', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ entityId, entityType })
        });

        if (!response.ok) {
            const errorData = await response.json();
            return { success: false, error: errorData.message || 'Error' };
        }

        return { success: true };
    } catch (error) {
        console.error('Login error:', error);
        return { success: false, error: 'Server error' };
    }
}