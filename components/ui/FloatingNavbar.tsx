"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { IconHome } from "@tabler/icons-react";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const path = usePathname();

  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState<boolean>(true);
  const [windowHeight, setWindowHeight] = useState<number>(0);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (path.startsWith("/contact") || path.startsWith("/portfolio")) {
      setVisible(true);
      return;
    }
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (direction < 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="dsk"
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "max-md:hidden flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent  rounded-full  bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[50] px-8 py-2  items-center justify-center space-x-4",
          className
        )}
      >
        <Link
          href="/"
          className="relative items-center flex space-x-1  hover:text-green-500 font-semibold"
        >
          <IconHome size={20} />
        </Link>
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative items-center flex space-x-1  hover:text-green-500 font-semibold",
              path.startsWith(navItem.link)
                ? "text-green-500"
                : "text-neutral-700"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </Link>
        ))}
      </motion.div>
      <motion.div
        key="mbl"
        initial={{
          opacity: 1,
          y: "0",
        }}
        animate={{
          y: visible ? 0 : "100%",
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          `md:hidden flex max-w-fit fixed bottom-[5dvh] inset-x-0 mx-auto border border-transparent  rounded-full  bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-8 py-2  items-center justify-center space-x-4`,
          className
        )}
      >
        <Link
          href="/"
          className="relative items-center flex space-x-1 text-neutral-700 hover:text-green-500 font-semibold"
        >
          <IconHome size={24} />
        </Link>
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative items-center flex space-x-1 text-3xl hover:text-green-500 font-semibold",
              path.startsWith(navItem.link)
                ? "text-green-500"
                : "text-neutral-700"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
