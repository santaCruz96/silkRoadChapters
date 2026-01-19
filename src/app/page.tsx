import Hero from "@/components/sections/Hero";
import HomeLayout from "@/layouts/HomeLayout";
import AboutAuthor from "@/components/sections/AboutAuthor";
import Benefits from "@/components/sections/Benefits";
import FreeLectures from "@/components/sections/FreeLectures";
import Geography from "@/components/sections/Geography";
import PaidLectures from "@/components/sections/PaidLectures";
import Interlude from "@/components/sections/Interlude";
import Blog from "@/components/sections/Blog";
import Reviews from "@/components/sections/Reviews";
import Instagram from "@/components/sections/Instagram";

export default function Home() {
  return (
    <>
      <Hero/>
      <HomeLayout>
        <AboutAuthor/>
        <Benefits/>
        <FreeLectures/>
        <Geography/>
        <PaidLectures/>
        <Interlude/>
        <Blog/>
        <Reviews/>
        <Instagram/>
      </HomeLayout>
    </>
  );
}
