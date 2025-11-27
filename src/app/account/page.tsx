import GeneralContainer from "@/layouts/GeneralContainer";
import UserSettings from "@/components/modules/UserSettings";
import PaidLecturesNet from "@/components/modules/PaidLecturesNet";
import SavedLectures from "@/components/modules/SavedLectures";

export default function Account() {
    return (
        <GeneralContainer>
            <UserSettings/>
            <PaidLecturesNet 
                page="account"
                cardsPerPage={4}
            />
            <SavedLectures/>
        </GeneralContainer>
    )
}