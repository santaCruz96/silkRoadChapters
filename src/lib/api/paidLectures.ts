'use server'

import { ApiResponse, PaidLecture } from "@/types/interfaces/PaidLecture.interface";
import { PurchasesLecture } from "@/types/api/purchasesLecture";
import { API_URL } from "@/config/constants";
import { fetchWithAuth } from "./apiClient";

export const getPaidLectures = async (): Promise<PaidLecture[]> => {
    const resAllLectures = await fetch(`${API_URL}/premium-lectures`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!resAllLectures.ok) {
        throw new Error(`Failed to fetch lectures: ${resAllLectures.status}`);
    }

    const allLectures = await resAllLectures.json();

    const res = await fetch(`${API_URL}/premium-lectures?pageSize=${allLectures.totalCount}`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const data: ApiResponse = await res.json();
    
    return data.items;
};

export const getSpecificLecture = async (id: string): Promise<PaidLecture> => {
    const res = await fetch(`${API_URL}/premium-lectures/${id}`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!res.ok) {
        throw new Error(`Failed to fetch lecture: ${res.status}`);
    }

    const data: PaidLecture = await res.json();

    return data;
};

export const checkoutPrice = async (id: string) => {
    const response = await fetchWithAuth(`/premium-lectures/${id}/checkout-price`);
        
    if (!response.ok) {
        throw new Error('Failed to fetch price');
    }
    
    return response.json();
}

export const getPurchasesLecture = async(): Promise<PurchasesLecture[]> => {
    const response = await fetchWithAuth(`/user/profile/purchases`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch lectures: ${response.status}`);
    }

    const data: PurchasesLecture[] = await response.json();
    
    return data;
}