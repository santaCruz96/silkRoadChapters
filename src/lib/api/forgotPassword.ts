'use server';

import { API_URL } from '@/config/constants';
import { ForgotData } from "@/types/api/forgotPassword";

export async function forgotPassword(data: ForgotData): Promise<{ success: boolean; error?: string }> {
    try {
        const res = await fetch(`${API_URL}/accounts/forgot-password`, {
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