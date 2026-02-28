import { Suspense } from "react";
import type { Metadata } from "next";
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {getTranslations} from 'next-intl/server';
import { cookies } from 'next/headers';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import { Inter } from "next/font/google";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import ResetPasswordWatcher from '@/components/ResetPasswordWatcher';
import Modal from "@/components/common/modal/Modal";
import Push from "@/components/common/Push";
import FullscreenImage from "@/components/common/modal/FullscreenImage";
import "./globals.css";

import { TOKEN_COOKIE_NAME } from '@/lib/authCookies';

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

  const cookieStore = await cookies();
  const isAuthenticated = !!cookieStore.get(TOKEN_COOKIE_NAME)?.value;

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
            <Header isAuthenticated={isAuthenticated}/>
            <Modal/>
            <Suspense fallback={null}>
              <ResetPasswordWatcher />
            </Suspense>
            <Push/>
            <FullscreenImage/>
            {children}
            <Footer/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}