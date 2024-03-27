"use client";
import Image from "next/image";

import { motion } from "framer-motion";

export const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <div className="bg-neutral-200 flex items-center justify-center rounded-full h-10 w-10 text-5xl">
          🧗‍♂️
        </div>
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Climbing
        </p>
        <p className="max-md:hidden border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Still a noob 😅
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <div className="bg-neutral-200  flex items-center justify-center rounded-full h-10 w-10 text-5xl">
          🎸
        </div>
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Music
        </p>
        <p className="max-md:hidden border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Quite a nerd 😬
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <div className="bg-neutral-200  flex items-center justify-center rounded-full h-10 w-10 text-5xl">
          🛫
        </div>
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Traveling (yep, not that original)
        </p>
        <p className="max-md:hidden  border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
          🇺🇸🇬🇧🇳🇱🇧🇪🇪🇸🇭🇷🇦🇹🇩🇪🇸🇮🇫🇷🇨🇭...
        </p>
      </motion.div>
    </motion.div>
  );
};
export const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex  w-full h-32 min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, rgba(48,48,48,1) 0%, rgba(34,197,94,1) 38%, rgba(13,233,94,1) 78%, rgba(255,255,255,1) 100%);",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>
  );
};
export const Skeleton = () => (
  <div className="flex  w-full h-32 min-h-[6rem] rounded-xl  bg-grid-small-green-500/[0.9] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
export const SkeletonDog = () => {
  const variants = {
    initial: {
      scale: 1,
    },
    hover: {
      scale: 1.75,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex items-center justify-center w-full h-32 min-h-[6rem] rounded-xl  bg-dot-green-500/[0.9] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"
    >
      <motion.div variants={variants} className=" text-6xl">
        🐕
      </motion.div>
    </motion.div>
  );
};
