import Hero from "@/components/sections/Hero";
import HomeLayout from "@/layouts/HomeLayout";
import AboutAuthor from "@/components/sections/AboutAuthor";
import Benefits from "@/components/sections/Benefits";
import FreeLectures from "@/components/sections/FreeLectures";
import Geography from "@/components/sections/Geography";
import PaidLectures from "@/components/sections/PaidLectures";
import Interlude from "@/components/sections/Interlude";
import Blogs from "@/components/sections/Blog";
import Reviews from "@/components/sections/Reviews";
import Instagram from "@/components/sections/Instagram";
import { getFreeLectures } from "@/lib/api/freeLectures";
import { getBlogs } from "@/lib/api/blogs";
import { getPaidLectures } from "@/lib/api/paidLectures";

export default async function Home() {
  const freeLectures = await getFreeLectures();
  const paidLectures = await getPaidLectures();
  const blogs = await getBlogs();

  return (
    <>
      <Hero/>
      <HomeLayout>
        <AboutAuthor/>
        <Benefits/>
        <FreeLectures lectures={freeLectures}/>
        <Geography/>
        <PaidLectures lectures={paidLectures}/>
        <Interlude/>
        <Blogs blogs={blogs}/>
        <Reviews/>
        <Instagram/>
      </HomeLayout>
    </>
  );
}
