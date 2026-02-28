'use server'

import { PaymentInitiateResponse } from "@/types/api/payment";
import { fetchWithAuth } from "./apiClient";

export async function initiatePayment( lectureId: string ): Promise<{ status: number; data?: PaymentInitiateResponse }> {
    const res = await fetchWithAuth('/payments/initiate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lectureId }),
    });

    if (!res.ok) {
        return { status: res.status };
    }

    const text = await res.text();
    const data = text ? JSON.parse(text) : undefined;
    return { status: res.status, data };
}