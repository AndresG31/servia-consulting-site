import type { Metadata } from "next";
import localFont from "next/font/local";
import { Playfair_Display } from "next/font/google";
import { draftMode } from "next/headers";
import VisualEditingComponent from "./components/ui/VisualEditing";
import "./globals.css";
import Header from "./components/layout/Header";
import ScrollProgress from "./components/ui/ScrollProgress";
import BackToTop from "./components/ui/BackToTop";
import CookieConsent from "./components/ui/CookieConsent";
import PageTransition from "./components/ui/PageTransition";
import TawkTo from "./components/ui/TawkTo";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const stackSans = localFont({
  src: [
    { path: "../public/fonts/StackSansHeadline-Light.ttf",    weight: "300", style: "normal" },
    { path: "../public/fonts/StackSansHeadline-Regular.ttf",  weight: "400", style: "normal" },
    { path: "../public/fonts/StackSansHeadline-Medium.ttf",   weight: "500", style: "normal" },
    { path: "../public/fonts/StackSansHeadline-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../public/fonts/StackSansHeadline-Bold.ttf",     weight: "700", style: "normal" },
  ],
  variable: "--font-dm-sans",
  display: "swap",
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isEnabled: isDraftMode } = await draftMode()

  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${stackSans.variable} ${playfair.variable} antialiased pt-[92px]`}
      >
        <ScrollProgress />
        <Header />
        <PageTransition>
          {children}
        </PageTransition>
        <BackToTop />
        <CookieConsent />
        <TawkTo />
        {isDraftMode && <VisualEditingComponent />}
      </body>
    </html>
  );
}
