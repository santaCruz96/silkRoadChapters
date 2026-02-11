"use client"

import Button from '../common/Button';
import { useResponsiveStore } from "@/store/useResponsiveStore";
import { useTranslations } from 'next-intl';

export default function Hero() {
  const isMobile = useResponsiveStore(state => state.isMobile);
  const t = useTranslations('Hero');

  const scrollToSection = (id: string, offset: number = 80) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative flex justify-center items-center overflow-hidden h-[calc(100vh+80px)] -mb-20 bg-gradient-to-r from-[#dff9fb] to-[#ffffff] top-0 left-0">
      <section className="flex flex-col w-[calc(100%-32px)] md:w-[calc(100%-64px)] items-center z-10 relative">
        <h1 
          className="font-bold text-[40px] max-w-275 leading-12 md:text-[64px] md:leading-[77px] tracking-[-0.01em] text-center text-dark"
        >
          {t('title')}
        </h1>
        <p className="mt-4 mb-16 font-semibold leading-[160%] text-[16px] text-center text-grey">
          {t('text')}
        </p>
        <Button 
          color="dark"
          size={isMobile ? "full" : "xl"}
          form="round"
          icon="fallingStar"
          onClick={() => scrollToSection('free-lectures')}
          hover="primary"
        > 
          {t('button')}
        </Button>
      </section>
      <div className="absolute inset-0 w-full h-full pointer-events-none animated-gradient opacity-70" />
    </div>
  );
}