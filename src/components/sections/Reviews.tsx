import ReviewsCarousel from "../modules/ReviewsCarousel";

export default function Reviews()  {
    return (
        <section className="flex flex-col gap-16 items-center">
            <div className="flex flex-col w-148 items-center">
                <h3 className="font-bold text-[36px] text-center text-dark mb-4">
                    What Travelers Say
                </h3>
                <p className="font-medium text-[16px] leading-[160%] text-center text-grey">
                    Real stories and impressions from those who’ve already explored Central Asia with Yuliya — journeys told through authentic voices.              
                </p>
            </div>
            <ReviewsCarousel/>
        </section>
    )
}