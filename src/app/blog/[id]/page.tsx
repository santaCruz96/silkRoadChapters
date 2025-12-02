import GeneralContainer from "@/layouts/GeneralContainer";
import Content from "@/components/sections/Content";
import Comments from "@/components/sections/Comments";
import Blog from "@/components/sections/Blog";

export default function BlogContent() {
    return (
        <GeneralContainer>
            <Content/>
            <Comments/>
            <Blog/>
        </GeneralContainer>
    )
}