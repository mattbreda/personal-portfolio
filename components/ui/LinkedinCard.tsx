"use client";

import { IconBrandLinkedin, IconInfoHexagon } from "@tabler/icons-react";
import { BentoGridItem } from "./BentoItem";
import Button from "./Button";
import Link from "next/link";

export const LinkedinCard = () => {
  return (
    <BentoGridItem
      title="Not enough?"
      description="If you're interested in a more comprehensive overview of my experience, I invite you to explore my LinkedIn profile for further details!"
      icon={<IconInfoHexagon />}
      action={
        <Link
          href="https://www.linkedin.com/in/matteo-breda-80484789/"
          target="_blank"
        >
          <Button label="LinkedIn" className="text-neutral-800" icon={<IconBrandLinkedin />}/>
        </Link>
      }
      className={`bg-slate-100 text-neutral-800`}
    />
  );
};
