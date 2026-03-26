'use server'

import { fetchWithAuth } from './apiClient';
import { LikesResponse } from '@/types/api/likes';

export const getLikes = async (id: string, entityType: number): Promise<LikesResponse> => {
    const res = await fetchWithAuth(`/reactions/summary?entityId=${id}&entityType=${entityType}`);

    if (!res.ok) {
        throw new Error(`Failed to fetch likes: ${res.status}`);
    }

    const data = await res.json();
    
    return data;
};

export async function addLike(
    entityType: number,
    entityId: string
): Promise<{ status: number }> {
    const res = await fetchWithAuth(`/reactions`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            reactionType: 1,
            entityId,
            entityType
        })
    })

    if (!res.ok) {
        return { status: res.status };
    }

    return { status: res.status };
}

export async function deleteLike(
    entityType: number,
    entityId: string,
): Promise<{ status: number }> {
    const res = await fetchWithAuth(`/reactions/delete?entityId=${entityId}&entityType=${entityType}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (!res.ok) {
        return { status: res.status };
    }

    return { status: res.status };
}