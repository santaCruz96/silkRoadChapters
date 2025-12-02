import SavedLecturesItem from "../common/SavedLecturesItem";

export default function SavedLectures(){
    return (
        <section className="flex flex-col items-center gap-16 w-full">
            <div className="flex flex-col gap-4 w-148">
                <h3 className="font-bold text-[36px] text-center text-dark">
                    Saved for Later
                </h3>
                <p className="font-medium text-[16px] leading-[160%] text-center text-grey">
                    A collection of lectures, stories, and materials you’ve marked to return to — your own Silk Road of inspiration.
                </p>
            </div>
            <div className="flex flex-col w-full">
                {Array.from({ length: 4 }).map((_, index) => (
                    <SavedLecturesItem key={index}/>
                ))}
            </div>
        </section>
    )
}