import { API_URL } from "@/config/constants";
import { NotifySubscribeStatus } from "@/types/api/notifySubscriptions";

export const subscribeToLecture = async (id: string, email: string): Promise<NotifySubscribeStatus> => {
    try {
        const response = await fetch(`${API_URL}/premium-lectures/${id}/notify-subscriptions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });

        if (response.ok) return 'subscribed';
        if (response.status === 404) return 'notFound';
        if (response.status === 429) return 'tooManyRequests';

        if (response.status === 400) {
            const errorText = await response.text();

            if (errorText.includes('PremiumLecture.AlreadyAvailable')) return 'alreadyAvailable';
            if (errorText.includes('PremiumLecture.InvalidEmail')) return 'invalidEmail';
        }

        return 'error';
    } catch {
        return 'error';
    }
};
