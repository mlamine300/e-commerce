import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/main/Header";
import Footer from "./components/main/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NUX BUY",
  description: "YOUR BEST ECOMMERCE WEBSITE IN THE ONEPIECE WORD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="mx-auto px-4 sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-6xl">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
