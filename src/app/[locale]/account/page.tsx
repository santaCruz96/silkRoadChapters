import GeneralContainer from "@/layouts/GeneralContainer";
import UserSettings from "@/components/modules/UserSettings";
import PaidLecturesNet from "@/components/modules/PaidLecturesNet";
import SavedLectures from "@/components/modules/SavedLectures";
import { redirect } from 'next/navigation';
import { UserProfile } from '@/types/api/user';
import { getProfile } from "@/lib/api/userProfile";

export default async function Account() {
    let user: UserProfile | null = null;
    
    try {
        user = await getProfile();
        
        if (!user) {
            throw new Error('Failed to fetch profile');
        }
    } catch (error) {
        console.error('Profile fetch error:', error);
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