import TextArea from "../common/TextArea"
import Button from "../common/Button"
import ContentReview from "../common/ContentReview"

export default function Comments() {
    return (
        <section className="flex flex-col gap-16 items-center">
            <div className="flex flex-col gap-8 items-center">
                <div className="flex flex-col gap-4 max-w-148">
                    <h3 className="font-bold text-[36px] leading-11 text-center text-dark">
                        What do you think?
                    </h3>
                    <p className="font-medium text-[16px] leading-[160%] text-center text-grey">
                        Leave a comment, start a discussion, or simply share what inspired you — every story grows through dialogue.
                    </p>
                </div>
                <TextArea/>
                <Button
                    color="dark"
                    size="xxl"
                    form="round"
                    icon="multipleForward"
                    hover="primary"
                >
                    Post
                </Button>
            </div>
            <div className="flex flex-wrap gap-y-8 gap-x-4">
                <ContentReview/>
                <ContentReview/>
                <ContentReview/>
                <ContentReview/>
            </div>
        </section>
    )
}