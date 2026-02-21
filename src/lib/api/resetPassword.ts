'use server';

import { API_URL } from '@/config/constants';
import { ResetData } from "@/types/api/resetPassword";

export async function resetPassword(data: ResetData): Promise<{ success: boolean; error?: string }> {
    try {
        const res = await fetch(`${API_URL}/accounts/reset-password`, {
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
        console.error('Login error:', error);
        return { success: false, error: 'Server error' };
    }
}