import GeographyCarousel from "../modules/GeographyCarousel";

export default function Geogarphy() {
    return (
        <section className="flex flex-col gap-16 items-center">
            <div className="flex flex-col gap-4">
                <h3 className="font-bold text-[36px] text-center text-dark">
                    The Geography of the Silk Road
                </h3>
                <p className="font-medium text-[16px] leading-[160%] text-center text-grey">
                    From China to Turkey, learn the cultures, histories, and landscapes <br />of the countries that shaped the Silk Road.
                </p>
            </div>
            <GeographyCarousel/>
        </section>
    )
}