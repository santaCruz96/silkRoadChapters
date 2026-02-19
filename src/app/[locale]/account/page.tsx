import GeneralContainer from "@/layouts/GeneralContainer";
import UserSettings from "@/components/modules/UserSettings";
import PaidLecturesNet from "@/components/modules/PaidLecturesNet";
import SavedLectures from "@/components/modules/SavedLectures";
import { fetchWithAuth, refreshTokens } from '@/lib/api/apiСlient';
import { redirect } from 'next/navigation';
import { UserProfile } from '@/types/api/user';
import { getAccessToken } from "@/lib/authCookies";

export default async function Account() {
    let token = await getAccessToken();
    let user: UserProfile | null = null;
    
    if (!token) {
        token = await refreshTokens(); 
    }

    try {
        const res = await fetchWithAuth('/user/profile');
        
        if (!res.ok) {
            if (res.status === 401) redirect('/');
            throw new Error('Failed to fetch profile');
        }
        
        user = await res.json();
    } catch (error) {
        console.error('Profile fetch error:', error);
        redirect('/');
    }

    if (!user) {
        redirect('/');
    }

    return (
        <GeneralContainer>
            <UserSettings user={user}/>
            <PaidLecturesNet 
                page="account"
                cardsPerPage={4}
            />
            <SavedLectures/>
        </GeneralContainer>
    )
}