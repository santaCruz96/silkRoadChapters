import GeneralContainer from "@/layouts/GeneralContainer";
import UserSettings from "@/components/modules/UserSettings";
import PaidLecturesNet from "@/components/modules/PaidLecturesNet";
import SavedLectures from "@/components/modules/SavedLectures";
import { fetchWithAuth } from '@/lib/api/apiСlient';
import { redirect } from 'next/navigation';
import { UserProfile } from '@/types/api/user';

export default async function Account() {

    let user: UserProfile | null = null;

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