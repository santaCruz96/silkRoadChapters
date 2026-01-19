import type { Metadata } from "next";
import {NextIntlClientProvider} from 'next-intl';
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        <NextIntlClientProvider>
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
