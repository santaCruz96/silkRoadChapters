import { Comment } from "@/types/api/comments"

export interface SpecificCommentProps {
    specificComment: Comment
}

export default function ContentReview({specificComment}: SpecificCommentProps) {
    return (
        <div className="flex flex-col rounded-[20px] p-4 bg-light gap-8 w-72 h-90 lg:w-148 lg:h-65
            shadow-[0_8px_20px_0_rgba(0,0,0,0.08),0_1px_2px_0_rgba(0,0,0,0.08)]"
        >
            <div className="flex items-start gap-4">
                <div className="rounded-xl w-[60px] h-[60px] bg-image"></div>
                <p className="font-semibold text-[18px] leading-[150%] text-dark">
                    {specificComment.userFullName}
                </p>
            </div>
            <p className="italic font-normal text-[16px] leading-[150%] text-grey">
                {specificComment.content}
            </p>
        </div>
    )
}