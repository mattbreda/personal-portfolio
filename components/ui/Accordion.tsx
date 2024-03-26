"use client";
import React, { useState, useRef, useEffect } from "react";
import { IconPlus } from "@tabler/icons-react";

const Accordion = ({
  title,
  period,
  position,
  stack,
  description,
  className,
}: {
  title: string;
  period: string;
  position?: string;
  description?: string;
  stack?: string[];
  className?: string;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [contentHeights, setContentHeights] = useState<number>(0);
  const heightRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heightRef.current?.clientHeight) {
      setContentHeights(heightRef.current?.clientHeight);
    }
  }, []);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion flex flex-col w-full max-w-full overflow-hidden bg-neutral-800 rounded-xl">
      <div
        className="w-full flex flex-row items-center justify-between text-slate-100 p-2.5 cursor-pointer"
        onClick={() => toggleSection()}
      >
        <div className="font-semibold text-l md:text-xl">{title} <span className="max-md:hidden">| {position}</span></div>
        <IconPlus
          size={32}
          className={`transition all duration-200 ${
            isOpen ? "-rotate-45" : null
          }`}
        />
      </div>
      <div
        className="transition-all duration-200 ease-in w-full"
        style={{
          maxHeight: isOpen ? contentHeights + "px" : "0",
        }}
      >
        <div
          ref={heightRef}
          className="w-full md:m-2.5 max-md:px-2.5 pb-5 text-white flex flex-col md:flex-row justify-between gap-x-5"
        >
          <div className="w-full md:w-1/2 flex flex-col gap-y-2.5">
            <div className="w-full">
              <span className="underline">Period:</span> {period}
            </div>
            <div className="w-full">
              <span className="underline">About:</span> {description}
            </div>
          </div>
          <div className="w-full md:w-1/2 max-md:mt-2.5">
            <span className="underline mb-2.5">Tech stack: </span>

            <div className="w-full flex flex-row flex-wrap gap-2.5 items-center ">
              {stack?.map((s) => (
                <div
                  key={s}
                  className="border border-green-500 rounded-xl p-2.5 text-xs"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
