import GeneralContainer from "@/layouts/GeneralContainer";
import Content from "@/components/sections/Content";
import FreeLectures from "@/components/sections/FreeLectures";
import Comments from "@/components/sections/Comments";

export default function FreeLectureContent() {
    return (
        <GeneralContainer>
            <Content/>
            <Comments/>
            <FreeLectures/>
        </GeneralContainer>
    )
}