"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

export const GrowingLine = ({ className }: { className?: string }) => {
 
  return (
    <motion.div
      initial={{
        opacity: 0,
        width: 0,
      }}
      animate={{
        width: '100%',
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      className={cn(
        "w-full h-[2px] bg-green-500",
        className
      )}
    ></motion.div>
  );
};
