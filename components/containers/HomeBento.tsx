import Link from "next/link";
import { BentoGrid } from "../ui/BentoGrid";
import { BentoGridItem } from "../ui/BentoItem";
import Button from "../ui/Button";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconPhoneCall,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconPolaroid,
} from "@tabler/icons-react";
export const HomeBento = () => {
  const items = [
    {
      title: "Do you want to know more about me?",
      description: "Check the about page to discover more about my education and previous jobs.",
      icon: <IconSignature className="h-4 w-4 text-slate-100 group-hover/bento:text-green-500 transition duration-200" />,
      action: <Link href="/about"><Button label="About" className="text-slate-100"/></Link>
    },
    {
      title: "Do you want to see some of my projects?",
      description: "Check my porfolio to see some of my latest works and projects",
      icon: <IconPolaroid className="h-4 w-4 text-slate-100 group-hover/bento:text-green-500 transition duration-200" />,
      action: <Button label="Porfolio" className="text-slate-100" />

    },
    {
      title: "Do you want to contact me?",
      description: "Check my contact page to see my contact informations",

      icon: <IconPhoneCall className="h-4 w-4 text-slate-100 group-hover/bento:text-green-500 transition duration-200" />,
      action: <Button label="Contacts" className="text-slate-100"/>

    },
  ];

  return (
    <section className="w-full px-2.5 pb-2.5 mt-2.5">
      <div className="p-2.5 md:p-20 rounded-2xl relative w-full h-full bg-green-500 bg-dot-white/[0.2] flex flex-col md:flex-row items-center">
        <BentoGrid className="w-full mx-auto">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              icon={item.icon}
              action={item.action}
              className={`${i === 3 || i === 6 ? "md:col-span-2" : ""} bg-neutral-700 text-slate-100`}
            />
          ))}
        </BentoGrid>

        {/* <div className="w-full grid grid-cols-3 gap-20">
          <div className="w-full bg-slate-500 rounded-xl ">
            <div>Do you want to know more about me?</div>
            <Button label="About me" />
          </div>
          <div className="w-full bg-slate-500 rounded-xl ">
            <div>Do you want to check my projects?</div>

            <Button label="Portfolio" />
          </div>
          <div className="w-full bg-slate-500 rounded-xl ">
            <div>Do you want to contact me?</div>

            <Button label="Contacts" />
          </div>
        </div> */}
      </div>
    </section>
  );
};
