import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./globals.css";
import MainHeader from "@/components/main-header/main-header";


const merriWeather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: 'Next.js Page Routing & Rendering',
  description: 'Learn how to route to different pages.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${merriWeather.variable}} antialiased m-0 p-0 bg-(--bg-color) text-(--text-color) text-base line-height-1.5`}
      >
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
