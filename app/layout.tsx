import "./globals.css";
import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import { IconList, IconMessage, IconUser } from "@tabler/icons-react";
import { Toaster } from "react-hot-toast";
import { GoogleAnalytics } from "@next/third-parties/google";

import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Script from "next/script";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GTAG || "";

export const metadata: Metadata = {
  title: "Matteo Breda | Developer",
  description:
    "Welcome to the website of Matteo Breda, freelance javascript developer!",
};

const rMono = Roboto_Mono({ subsets: ["latin"] });

const navItems = [
  /*  {
    name: "Home",
    link: "/",
    icon: <IconHome className="h-4 w-4 text-neutral-500 " />,
  }, */
  {
    name: "Portfolio",
    link: "/portfolio",
    icon: <IconList className="h-4 w-4" />,
  },
  {
    name: "About",
    link: "/about",
    icon: <IconUser className="h-4 w-4" />,
  },
  {
    name: "Contact",
    link: "/contact",
    icon: <IconMessage className="h-4 w-4" />,
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rMono.className} bg-neutral-100`}>
        <Script
          id="Cookiebot"
          strategy="afterInteractive"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="a4b1dc6b-2a65-48ca-a446-33a06e084d7f"
          data-blockingmode="auto"
          type="text/javascript"
        ></Script>
        <Toaster />
        <main className="w-full relative">
          <FloatingNav navItems={navItems} />
          {children}
        </main>
        <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
      </body>
    </html>
  );
}
