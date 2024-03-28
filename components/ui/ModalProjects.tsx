"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { GrowingLine } from "./GrowingLine";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import { IconX } from "@tabler/icons-react";


export const ModalProjects = ({
  projectDetails,
  isOpen,
  close,
}: {
  projectDetails?: {
    title?: string;
    categories?: string[];
    tech?: string[];
    description?: string;
    url?: string;
    image?: string;
    images?: any[];
  };
  className?: string;
  isOpen: boolean;
  close: () => void;
}) => {

  /*   const [showModal, setShowModal] = useState(false); */
  return (
    <div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center glass"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="max-w-[1400px] w-[calc(100%-1.25rem)] bg-neutral-700 p-2.5 rounded-xl relative max-h-[calc(100%-1.25rem)] h-fit overflow-auto flex flex-col"
              initial={{ y: "100vh", opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  duration: 0.5,
                },
              }}
              exit={{
                y: "100vh",
                opacity: 0,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  duration: 2,
                },
              }}
            >
              <div
                className="absolute top-2.5 right-2.5 cursor-pointer"
                onClick={close}
              >
                <IconX
                  size={32}
                  className="text-slate-100 hover:text-green-500 transition duration-200"
                />
              </div>
              <h2 className="text-4xl text-green-500 font-semibold">
                {projectDetails?.title}
              </h2>
              <GrowingLine className="my-2.5" />
              <div className="flex flex-row items-center gap-x-2.5">
                <span className="text-slate-100">Category:</span>{" "}
                {projectDetails?.categories?.map((cat) => (
                  <div
                    key={cat}
                    className="text-slate-100 bg-slate-100/20 text-xs border border-slate-100 rounded-lg px-2.5"
                  >
                    {cat}
                  </div>
                ))}
              </div>
              <div className="flex flex-col md:grid md:grid-cols-2 gap-x-2.5">
                {projectDetails?.images?.map((img) => {
                  return (
                    <div
                      className="w-full h-fit object-cover  overflow-hidden rounded-xl mt-2.5"
                      key={img}
                    >
                      <Image
                        src={img}
                        height="600"
                        width="1000"
                        className="w-full object-contain rounded-xl hover:scale-110 transition-all duration-1000"
                        alt="Screenshot of the website"
                        placeholder="blur"
                      />
                    </div>
                  );
                })}
              </div>
              <GrowingLine className="my-2.5" />
              <div className="flex flex-row items-center gap-x-2.5">
                <span className="text-slate-100">Technologies:</span>{" "}
                {projectDetails?.tech?.map((tech) => (
                  <div
                    key={tech}
                    className="text-green-100 bg-green-500/20 text-xs border border-green-500 rounded-lg px-2.5"
                  >
                    {tech}
                  </div>
                ))}
              </div>
              <p className="py-2.5 text-slate-100">
                {projectDetails?.description}
              </p>
              <div className="w-full flex justify-end mt-auto">
                {projectDetails?.url ? (
                  <Link href={projectDetails?.url} target="_blank">
                    <Button label="Visit" />
                  </Link>
                ) : null}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
