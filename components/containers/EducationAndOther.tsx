import {
  IconLanguage,
  IconPhoneCall,
  IconPolaroid,
  IconSchool,
  IconDog,
  IconUser,
} from "@tabler/icons-react";
import { BentoGrid } from "../ui/BentoGrid";
import { BentoGridItem } from "../ui/BentoItem";
import Link from "next/link";
import Button from "../ui/Button";
import { Skeleton, SkeletonDog, SkeletonFour, SkeletonThree } from "./EducationHeaders";

const items = [
  {
    header: <Skeleton />,
    title: "Multimedia Sciences and Technologies",
    description:
      "Bachelor Degree in Multimedia Sciences and Technologies @ University of Udine 🇮🇹",
    icon: (
      <IconSchool className="h-4 w-4 text-slate-100 group-hover/bento:text-green-500 transition duration-200" />
    ),
  },
  {
    header: <Skeleton />,
    title: "Comunication and Multimedia Design",
    description:
      "Minor @ NHL University of Applied Sciences, Leeuwarden,Netherlands 2016-2017 🇳🇱",
    icon: (
      <IconSchool className="h-4 w-4 text-slate-100 group-hover/bento:text-green-500 transition duration-200" />
    ),
    action: <Button label="Porfolio" className="text-slate-100" />,
  },
  {
    header: <SkeletonThree />,
    title: "Languages",
    description: "Italian (native)🇮🇹, English (fluent) 🇬🇧",

    icon: (
      <IconLanguage className="h-4 w-4 text-slate-100 group-hover/bento:text-green-500 transition duration-200" />
    ),
    action: <Button label="Contacts" className="text-slate-100" />,
  },
  {
    header: <SkeletonFour />,
    title: "My hobbies?",
    description: "I don't want to bore you to death, but if you ask...",
    icon: (
      <IconUser className="h-4 w-4 text-slate-100 group-hover/bento:text-green-500 transition duration-200" />
    ),
    action: (
      <Link href="/about">
        <Button label="About" className="text-slate-100" />
      </Link>
    ),
  },
  {
    header: <SkeletonDog />,
    title: "Dogs?!",
    description:
      "Random trivia: Even if not related to my current job, in the past I did one of the coolest jobs ever, dogsitting! But that's another story...",
    icon: (
      <IconDog className="h-4 w-4 text-slate-100 group-hover/bento:text-green-500 transition duration-200" />
    ),
  },
];
export const EducationAndOther = () => {
  return (
    <div className="w-full rounded-lg bg-slate-100 bg-dot-white/[0.2]  mt-2.5 p-2.5 flex flex-col">
      <h1 className=" text-3xl font-semibold text-black-500 mb-5">
        Education & more
      </h1>
      <BentoGrid className="w-full mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            icon={item.icon}
            header={item.header}
            className={`${
              i === 3 ? "md:col-span-2" : ""
            } bg-neutral-700 text-slate-100 justify-start`}
          />
        ))}
      </BentoGrid>
    </div>
  );
};
