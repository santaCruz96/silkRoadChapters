"use client";

import { useState } from "react";
import TextArea from "../common/TextArea"
import Button from "../common/Button"
import ContentReview from "../common/ContentReview"
import { useResponsiveStore } from "@/store/useResponsiveStore";
import { usePush } from "@/store/usePushStore";
import { useModal } from "@/store/useModalStore";
import useEmblaCarousel from "embla-carousel-react";
import {useTranslations} from 'next-intl';
import { Comment, CommentData } from "@/types/api/comments";
import { writeComment } from "@/lib/api/comments";

export interface CommentsProps {
    comments: Comment[];
    id: string;
    entityType: 0 | 1 | 2;
    isAuthenticated: boolean;
}

export default function Comments({
    comments, 
    id, 
    entityType,
    isAuthenticated
}: CommentsProps) {
    const [commentData, setCommentData] = useState<CommentData>({
        entityId: id,
        entityType: entityType,
        content: ''
    });
    const [isLoading, setIsLoading] = useState(false);

    const { addPush } = usePush();
    const { open } = useModal();

    const t = useTranslations('Comments');
    const tPush = useTranslations('Push');
    const isMobile = useResponsiveStore((state) => state.isMobile);
    const isTablet = useResponsiveStore((state) => state.isTablet);
    const [emblaRef] = useEmblaCarousel({ align: "start", dragFree: true });

    const handleTextChange = (newValue: string) => {
        setCommentData(prev => ({
            ...prev,
            content: newValue
        }));
    };

    const handleCommentSubmit = async () => {
        setIsLoading(true);
        try {
            const response = await writeComment(commentData);

            if (!response.success) {
                addPush('error', tPush('somethingWrong'));
                return; 
            }
            
            addPush('info', tPush('writeComment'));
            setCommentData((prev) => ({...prev, content: ''}));
        } catch (error) {
            console.error('Login error:', error);
            addPush('error', tPush('somethingWrong'));
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <section className="flex flex-col gap-12 sm:gap-16 items-center w-full">
            <div className="flex flex-col gap-8 items-center">
                <div className="flex flex-col gap-4 w-full lg:max-w-148">
                    <h3 className="font-bold text-[36px] leading-11 text-center text-dark">
                        {t('title')}
                    </h3>
                    <p className="font-medium text-[16px] leading-[160%] text-center text-grey">
                        {t('text')}
                    </p>
                </div>
                <TextArea 
                    value={commentData.content}
                    onChange={handleTextChange}
                />
                <Button
                    color="dark"
                    size={isMobile ? 'full' : 'xxl'}
                    form="round"
                    icon="multipleForward"
                    hover={!commentData.content.trim() || isLoading ? "" : "primary"} 
                    disabled={!commentData.content.trim() || isLoading} 
                    onClick={isAuthenticated ? handleCommentSubmit : () => open('login')}
                >
                    Post
                </Button>
            </div>
            {isTablet ? 
                <div className="w-full">
                    <div ref={emblaRef}>
                        <div className="flex gap-4">
                            {comments.map((comment) => (
                                <ContentReview key={comment.id} specificComment={comment}/>
                            ))}
                        </div>
                    </div>
                </div>
            :
                <div className="flex flex-wrap gap-y-8 gap-x-4">
                    {comments.map((comment) => (
                        <ContentReview key={comment.id} specificComment={comment}/>
                    ))}
                </div>
            }
            
        </section>
    )
}