import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
const rMono = Roboto_Mono({ subsets: ["latin"] });
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: "Matteo Breda | Developer",
  description: "Welcome to the website of Matteo Breda, freelance javascript developer!",
};

const navItems = [
 /*  {
    name: "Home",
    link: "/",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  }, */
  {
    name: "About",
    link: "/about",
    icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Contact",
    link: "/contact",
    icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Portfolio",
    link: "/portfolio",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
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
        <Toaster />
        <main className="w-full relative">
          <FloatingNav navItems={navItems} />
          {children}
        </main>
      </body>
    </html>
  );
}
