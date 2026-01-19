"use client"

import { useEffect, useRef } from 'react';
import Button from '../common/Button';
import { useResponsiveStore } from "@/store/useResponsiveStore";
import {useTranslations} from 'next-intl';

export default function Hero() {
  const isMobile = useResponsiveStore(state => state.isMobile);
  const t = useTranslations('Hero');

  const interBubbleRef = useRef<HTMLDivElement>(null);
  const curXRef = useRef<number>(0);
  const curYRef = useRef<number>(0);
  const tgXRef = useRef<number>(0);
  const tgYRef = useRef<number>(0);

  const scrollToSection = (id: string, offset: number = 80) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const interBubble = interBubbleRef.current;
    if (!interBubble) return;

    const move = () => {
      curXRef.current += (tgXRef.current - curXRef.current) / 20;
      curYRef.current += (tgYRef.current - curYRef.current) / 20;
      interBubble.style.transform = `translate(${Math.round(curXRef.current)}px, ${Math.round(curYRef.current)}px)`;
      requestAnimationFrame(move);
    };

    const handleMouseMove = (e: MouseEvent) => {
      tgXRef.current = e.clientX;
      tgYRef.current = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    move();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative flex justify-center items-center overflow-hidden h-[calc(100vh+80px)] -mb-20 bg-linear-to-r from-[#dff9fb] to-[#ffffff] top-0 left-0">
      <section className="flex flex-col w-[calc(100%-32px)] md:w-[calc(100%-64px)] items-center z-1">
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
      <svg className="hidden" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <div className="absolute w-full h-full" style={{ filter: 'url(#goo) blur(40px)' }}>
        <div 
          className="absolute rounded-full opacity-80 mix-blend-hard-light animate-[moveVertical_30s_ease_infinite]"
          style={{
            width: '200%',
            height: '200%',
            top: 'calc(50% - 100%)',
            left: 'calc(50% - 100%)',
            background: 'radial-gradient(circle at center, rgba(104, 109, 224, 0.8) 0, rgba(104, 109, 224, 0) 50%) no-repeat',
          }}
        />

        <div 
          className="absolute rounded-full opacity-80 mix-blend-hard-light animate-[moveInCircle_20s_ease_reverse_infinite]"
          style={{
            width: '200%',
            height: '200%',
            top: 'calc(50% - 100%)',
            left: 'calc(50% - 100%)',
            background: 'radial-gradient(circle at center, rgba(126, 214, 223, 0.8) 0, rgba(126, 214, 223, 0) 50%) no-repeat',
            transformOrigin: 'calc(50% - 400px)',
          }}
        />

        <div 
          className="absolute rounded-full opacity-80 mix-blend-hard-light animate-[moveInCircle_40s_linear_infinite]"
          style={{
            width: '200%',
            height: '200%',
            top: 'calc(50% - 100% + 200px)',
            left: 'calc(50% - 100% - 500px)',
            background: 'radial-gradient(circle at center, rgba(223, 249, 251, 0.8) 0, rgba(223, 249, 251, 0) 50%) no-repeat',
            transformOrigin: 'calc(50% + 400px)',
          }}
        />

        <div 
          className="absolute rounded-full opacity-70 mix-blend-hard-light animate-[moveHorizontal_40s_ease_infinite]"
          style={{
            width: '200%',
            height: '200%',
            top: 'calc(50% - 100%)',
            left: 'calc(50% - 100%)',
            background: 'radial-gradient(circle at center, rgba(255, 121, 121, 0.8) 0, rgba(255, 121, 121, 0) 50%) no-repeat',
            transformOrigin: 'calc(50% - 200px)',
          }}
        />

        <div 
          className="absolute rounded-full opacity-80 mix-blend-hard-light animate-[moveInCircle_20s_ease_infinite]"
          style={{
            width: '400%',
            height: '400%',
            top: 'calc(50% - 200%)',
            left: 'calc(50% - 200%)',
            background: 'radial-gradient(circle at center, rgba(149, 175, 192, 0.8) 0, rgba(149, 175, 192, 0) 50%) no-repeat',
            transformOrigin: 'calc(50% - 800px) calc(50% + 200px)',
          }}
        />

        <div 
          ref={interBubbleRef}
          className="absolute rounded-full opacity-70 mix-blend-hard-light"
          style={{
            width: '100%',
            height: '100%',
            top: '-50%',
            left: '-50%',
            background: 'radial-gradient(circle at center, rgba(140, 100, 255, 0.8) 0, rgba(140, 100, 255, 0) 50%) no-repeat',
          }}
        />
      </div>

      <style jsx>{`
        @keyframes moveInCircle {
          0% { transform: rotate(0deg); }
          50% { transform: rotate(180deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes moveVertical {
          0% { transform: translateY(-50%); }
          50% { transform: translateY(50%); }
          100% { transform: translateY(-50%); }
        }
        @keyframes moveHorizontal {
          0% { transform: translateX(-50%) translateY(-10%); }
          50% { transform: translateX(50%) translateY(10%); }
          100% { transform: translateX(-50%) translateY(-10%); }
        }
      `}</style>
    </div>
  );
};