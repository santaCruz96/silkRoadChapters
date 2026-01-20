import GeneralContainer from "@/layouts/GeneralContainer";
import Content from "@/components/sections/Content";
import Comments from "@/components/sections/Comments";
import PaidLectures from "@/components/sections/PaidLectures";

export default function PaidLecture() {
    return (
        <GeneralContainer>
            <Content/>
            <Comments/>
            <PaidLectures/>
        </GeneralContainer>
    )
}