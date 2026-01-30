import type { Metadata } from "next";
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import { Inter } from "next/font/google";
import Header from "@/layouts/Header";
// import SearchOverlay from "@/components/modules/Search/SearchOverlay";
import Footer from "@/layouts/Footer";
import Modal from "@/components/common/modal/Modal";
import Push from "@/components/common/Push";
import FullscreenImage from "@/components/common/modal/FullscreenImage";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Silk Road Chapters",
  description: "",
};

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

export default async function RootLayout({
  children,
  params
}: Props) {

  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body
        className={`${inter.variable} antialiased`}
      >
        <NextIntlClientProvider>
          <Header />
          {/* <SearchOverlay/> */}
          <Modal/>
          <Push/>
          <FullscreenImage/>
          {children}
          <Footer/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}