import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : 'http://localhost:3000'
  ),
  title: "Servia Consulting",
  description: "Restaurant consulting services to help operators build stronger systems, improve profitability, and grow with confidence.",
  openGraph: {
    title: "Servia Consulting",
    description: "Restaurant consulting services to help operators build stronger systems, improve profitability, and grow with confidence.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
    
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased pt-[104px]`}
      >
         <Header/>
        {children}
      </body>
    </html>
  );
}
