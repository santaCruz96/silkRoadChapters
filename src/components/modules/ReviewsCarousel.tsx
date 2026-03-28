"use client";

import ReviewCard from "../common/ReviewCard";
import { useResponsiveStore } from "@/store/useResponsiveStore";
import useEmblaCarousel from "embla-carousel-react";

import { useReviewsData } from "@/data/reviews.data";

function ReviewsCarouselMobile() {
    const reviewsData = useReviewsData();
    const [emblaRef] = useEmblaCarousel({ align: "start", dragFree: true, loop: true });
    const allReiviews = reviewsData[0].concat(reviewsData[1])

    return (
        <div className="w-full">
            <div ref={emblaRef}>
                <div className="flex gap-4">
                    {allReiviews.map((review) => (
                        <ReviewCard 
                            key={review.id}
                            review={review}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

function ReviewsCarouselDesktop() {
    const reviewsData = useReviewsData()

    return (
        <>
            <style>{`
                .reviews-track:hover .reviews-row { animation-play-state: paused; }
                .reviews-row { display: flex; gap: 1rem; width: max-content; }
                .reviews-row-forward  { animation: reviewsScrollForward  30s linear infinite; }
                .reviews-row-backward { animation: reviewsScrollBackward 30s linear infinite; }
                @keyframes reviewsScrollForward  { from { transform: translateX(0); }    to { transform: translateX(-50%); } }
                @keyframes reviewsScrollBackward { from { transform: translateX(-50%); } to { transform: translateX(0); }    }
            `}</style>

            <div className="relative w-480 flex flex-col gap-4 overflow-hidden pb-6">
                <div className="absolute inset-y-0 left-0 w-30 bg-linear-to-r 
                    from-[#f2f2f2] to-transparent z-10 pointer-events-none"
                />
                <div className="absolute inset-y-0 right-0 w-30 bg-linear-to-l 
                    from-[#f2f2f2] to-transparent z-10 pointer-events-none"
                />
                <div className="reviews-track">
                    <div className="reviews-row reviews-row-forward">
                        {[...reviewsData[0], ...reviewsData[0]].map((review, i) => (
                            <div key={i} className="reviews-item">
                                <ReviewCard review={review} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="reviews-track">
                    <div className="reviews-row reviews-row-backward">
                        {[...reviewsData[1], ...reviewsData[1]].map((review, i) => (
                            <div key={i} className="reviews-item">
                                <ReviewCard review={review} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default function ReviewsCarousel() {
    const isTablet = useResponsiveStore((state) => state.isTablet);
    return isTablet ? <ReviewsCarouselMobile /> : <ReviewsCarouselDesktop />;
}