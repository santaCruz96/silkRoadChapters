import type { Metadata } from "next";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, getLocale} from 'next-intl/server';
import { Inter } from "next/font/google";
import Header from "@/layouts/Header";
import SearchOverlay from "@/components/modules/Search/SearchOverlay";
import Footer from "@/layouts/Footer";
import Modal from "@/components/common/modal/Modal";
import Push from "@/components/common/Push";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Silk Road Chapters",
  description: "",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${inter.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <Header />
          <SearchOverlay/>
          <Modal/>
          <Push/>
          {children}
          <Footer/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}