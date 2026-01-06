import GeneralContainer from "@/layouts/GeneralContainer";
import InfoCard from "@/components/common/InfoCard";

export default function FAQ() {
    return (
        <GeneralContainer>
            <div className="flex flex-col gap-16">
                <h1 
                    className="font-bold text-[40px] sm:text-[64px] tracking-[-0.01em] leading-12 
                        sm:leading-[77px] text-center text-dark"
                >
                    Let’s Clear the Path
                </h1>
                <div className="flex flex-col sm:flex-col-reverse lg:flex-col gap-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-8 gap-y-8 slgm:gap-y-0 gap-x-4">
                        <InfoCard 
                            size="col-span-1 lg:col-span-3"
                            icon="card"
                            title="How can I pay for the lectures?"
                            text="You can pay with Visa or Mastercard in any currency. All transactions are processed securely through our trusted payment system."
                        />
                        <InfoCard 
                            size="col-span-1 lg:col-span-3"
                            icon="light"
                            title="Do you create original content?"
                            text="Yes. All materials, texts, and visuals are authored by our team and local experts. Each lecture reflects authentic voices and real stories from Central Asia."
                        />
                        <InfoCard 
                            size="col-span-1 lg:col-span-2"
                            icon="starsMinimalistic"
                            title="A Buddha in logo? Why?"
                            text="The Buddha sits on books — a reminder that learning is also a spiritual journey."
                        />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 lg:gap-y-0 gap-x-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-4">
                            <InfoCard 
                                size="col-span-1"
                                icon="clappeBoard"
                                title="Do I need to create an account to buy the lectures?"
                                text="You don't need account to watch the free lectures, but only creating a personal account allows you to purchase materials and get access to them anytime"
                            />
                            <InfoCard 
                                size="col-span-1"
                                icon="smile"
                                title="Are your lectures suitable for beginners?"
                                text="Absolutely. Whether you’re a student, traveler, or researcher — each lecture is designed to be accessible, inspiring, and easy to follow, even without prior background."
                            />
                            <InfoCard 
                                size="col-span-1 lg:col-span-2"
                                icon="calendar"
                                title="Will new content appear regularly?"
                                text="Yes. We update our library with new free and paid lectures, stories, and insights every month — so there’s always a new chapter waiting."
                            />
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-4">
                            <InfoCard 
                                size="col-span-1 lg:col-span-2"
                                icon="earth"
                                title="Which countries do you cover?"
                                text="Our content spans the historical Silk Road — from China to Turkey, with a special focus on Uzbekistan, Kyrgyzstan, Tajikistan, Kazakhstan, Turkmenistan, and Iran."
                            />
                            <InfoCard 
                                size="col-span-1"
                                icon="dialog"
                                title="Can I contribute to the project?"
                                text="We’re always open to collaboration with writers, historians, and travelers. If you’d like to share your knowledge or experience — just reach out via info@silkroadchapters.com."
                            />
                            <InfoCard 
                                size="col-span-1"
                                icon="bookBookmark"
                                title="Can I access the lectures after purchase?"
                                text="Yes. Once you’ve purchased a lecture, you’ll have unlimited access to it in your personal account — you can revisit the materials anytime, from any device."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </GeneralContainer>
    )
}