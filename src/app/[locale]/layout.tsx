import { Providers } from './providers';
import type { Metadata } from "next";
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {getTranslations} from 'next-intl/server';
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

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "Hero.meta" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

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
          <Providers>
            <Header />
            {/* <SearchOverlay/> */}
            <Modal/>
            <Push/>
            <FullscreenImage/>
            {children}
            <Footer/>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}