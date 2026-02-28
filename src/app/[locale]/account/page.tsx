import GeneralContainer from "@/layouts/GeneralContainer";
import UserSettings from "@/components/modules/UserSettings";
import PaidLecturesNet from "@/components/modules/PaidLecturesNet";
import SavedLectures from "@/components/modules/SavedLectures";
import { redirect } from 'next/navigation';
import { getProfile } from "@/lib/api/userProfile";
import { getPaidLectures } from "@/lib/api/paidLectures";

export default async function Account() {
    const user = await getProfile();
    const lectures = await getPaidLectures();

    if (!user) {
        redirect('/');
    }

    return (
        <GeneralContainer>
            <UserSettings user={user}/>
            <PaidLecturesNet 
                lectures={lectures}
                page="account"
                cardsPerPage={4}
            />
            <SavedLectures/>
        </GeneralContainer>
    )
}