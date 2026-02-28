'use server'

import { fetchWithAuth } from './apiClient';
import { LikesResponse } from '@/types/api/likes';

export const getLikes = async (id: string, entityType: number): Promise<LikesResponse> => {
    const res = await fetchWithAuth(`/reactions/summary?entityId=${id}&entityType=${entityType}`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!res.ok) {
        throw new Error(`Failed to fetch likes: ${res.status}`);
    }

    const data = await res.json();
    
    return data;
};

export async function toggleLike(
    entityType: string,
    id: string,
    isLiked: boolean
): Promise<{ status: number }> {
    const res = await fetchWithAuth(`/${entityType}/${id}/like`, {
        method: isLiked ? 'DELETE' : 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (!res.ok) {
        return { status: res.status };
    }

    return { status: res.status };
}