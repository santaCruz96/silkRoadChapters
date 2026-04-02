import GeneralContainer from "@/layouts/GeneralContainer";
import UserSettings from "@/components/modules/UserSettings";
import PaidLecturesNet from "@/components/modules/PaidLecturesNet";
import SavedLectures from "@/components/modules/SavedLectures";
import { redirect } from 'next/navigation';
import { getProfile } from "@/lib/api/userProfile";
import { getPaidLectures, getPurchasesLecture } from "@/lib/api/paidLectures";
import { mergePurchasesLectures } from "@/utils/mergePurchasesLectures";

export default async function Account() {
    const user = await getProfile();
    const allLectures = await getPaidLectures();
    const purchasesLecture = await getPurchasesLecture();
    const specificLectures = mergePurchasesLectures(allLectures, purchasesLecture);

    if (!user) {
        redirect('/');
    }

    return (
        <GeneralContainer>
            <UserSettings user={user}/>
            <PaidLecturesNet 
                lectures={specificLectures}
                page="account"
                cardsPerPage={4}
                purchasesLectures={null}
            />
            <SavedLectures/>
        </GeneralContainer>
    )
}