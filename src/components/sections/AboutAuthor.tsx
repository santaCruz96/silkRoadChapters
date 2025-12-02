"use client";

import Button from "../common/Button";
import { usePathname } from 'next/navigation';

export default function AboutAuthor() {
    const pathname = usePathname();

    const isAboutPage = pathname.includes('/about')

    return (
        <section className="flex justify-between w-full">
            <div>
                <h2 className="font-bold text-[24px] leading-[140%] text-dark">
                    Hello, I’m Yuliya! <br />Welcome to Silk Road Chapters
                </h2>
                {isAboutPage ? 
                    <p className="mt-4 mb-8 font-medium text-[16px] leading-[160%] text-grey max-w-110 text-wrap">
                        My path into history began almost by accident. At 18, I started working as a guide — a simple job at first, but one that opened a world I never expected. Nearly twenty years later, I’m still on that path, exploring the history, culture, and traditions of Central Asia and Silk Road and sharing them with anyone curious enough to listen. <br />
                        <br /> Over the years, guiding became more than work; it became my passion. I love telling people about the stories behind the ancient cities, the meaning woven into architecture, the flavors of our food, and the spirit of the Silk Road that still lives in everyday life here. There is nothing more rewarding than watching someone discover this region for the first time — and fall in love with it the way I once did. <br />
                        <br /> Silk Road Chapters was born from that feeling. It’s my way of helping more people learn about the fascinating history of the Silk Road, beyond tours and beyond borders — through stories, reflections, and accessible knowledge. <br />
                        <br /> So come along with me. <br />
                        <br /> Join me in this adventure, and let’s explore the Silk Road together — one chapter at a time. 
                    </p>
                :
                    <p className="mt-4 mb-8 font-medium text-[16px] leading-[160%] text-grey max-w-110 text-wrap">
                        Hello, I’m Yuliya! Welcome to Silk Road Chapters <br />
                        <br /> For the past 18 years, I have been guiding travelers through the diverse landscapes and cultures of Central Asia and Silk Road. From the ancient cities of Uzbekistan to the archeological sites of Turkmenistan, each journey has been a story worth sharing. With Silk Road Chapters, I want to open these stories to a wider audience and make the Silk Road more accessible to curious minds. <br />
                        <br /> This project is not only about history — it is about discovery, cultural exchange, and deeper understanding. It reminds us that the stories of the past are still alive in the way we learn, travel, and connect today.
                    </p>
                }
                <div className="flex flex-col gap-4">
                    <a 
                        href="https://www.instagram.com/silk_road_chapters/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-fit"
                    >
                        <Button
                            color="dark"
                            size="xxl"
                            form="round"
                            icon="instagram"
                            hover="primary"
                        >   
                            Instagram
                        </Button>
                    </a>
                    <a 
                        href="" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-fit"
                    >
                        <Button
                            color="light"
                            size="xxl"
                            form="round"
                            icon="mail"
                            shadow
                            hover="secondary"
                        >   
                            Email
                        </Button>
                    </a>
                </div>
            </div>
            <div className="rounded-[30px] w-[592px] h-[592px] bg-image">

            </div>
        </section>
    )
}