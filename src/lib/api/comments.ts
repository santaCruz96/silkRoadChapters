'use server'

import { ApiResponse, Comment, CommentData } from "@/types/api/comments";
import { API_URL } from "@/config/constants";
import { fetchWithAuth } from "./apiClient";

export const getComments = async (id: string, entityType: number): Promise<Comment[]> => {
    const res = await fetch(`${API_URL}/comments/${id}?entityType=${entityType}`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!res.ok) {
        throw new Error(`Failed to fetch comments: ${res.status}`);
    }

    const data: ApiResponse = await res.json();
    
    return data.items;
};

export const writeComment = async (data: CommentData): Promise<{ success: boolean; error?: string }> => {
    try {
        const res = await fetchWithAuth(`/comments`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        if (!res.ok) {
            const errorData = await res.json();
            return { success: false, error: errorData.message || 'Error' };
        }

        return { success: true };
    } catch (error) {
        console.error('Error:', error);
        return { success: false, error: 'Server error' };
    }
} 