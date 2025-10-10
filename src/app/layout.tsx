import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/main/Header";
import Footer from "./components/main/Footer";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
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
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-body text-text-primary">
        <div
          className="flex flex-col mx-auto px-4 max-w-lg sm:max-w-xl
         md:max-w-2xl lg:max-w-3xl xl:max-w-6xl   min-h-screen"
        >
          <Header />
          <div className="w-full h-max flex-grow">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
