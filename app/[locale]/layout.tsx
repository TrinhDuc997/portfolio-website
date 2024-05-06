import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'animate.css';
import {NextIntlClientProvider, useMessages} from 'next-intl';
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";
import { ThemeModeScript } from "flowbite-react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trịnh Xuân Đức",
  icons: {
    icon: {
      url:"/favicon.png",
      type:"image/png",
      sizes:'32x32',
    }
  },
};

export default function LocaleLayout({
  children,
  params: {locale}
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {
  const messages = useMessages();
  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <ThemeModeScript />
      </head>
      <body className={`${inter.className} bg-neutral-900`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
        </NextIntlClientProvider>
      </body>
      <GoogleAnalytics gaId="G-2ZCZ2RG6W8"/>
    </html>
  );
}
