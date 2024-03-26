import Image from "next/image";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";
import Button from "../ui/Button";
import { PinContainer } from "../ui/3DPins";
import { Boxes } from "../ui/BackgroundBoxes";
import { cn } from "@/utils/cn";
import { HoverEffect } from "../ui/CardsHover";
import {
  JavascriptLoto,
  Netlify,
  Node,
  Postgres,
  TypeScript,
  Vercel,
} from "../ui/Logos";
export const projects = [
  {
    title: "JavaScript",
    link: "https://stripe.com",
    logo: JavascriptLoto,
  },
  {
    title: "TypeScript",
    link: "https://netflix.com",
    logo: TypeScript,
  },
  {
    title: "NodeJS",
    link: "https://google.com",
    logo: Node,
  },
  {
    title: "PostgresSQL",
    link: "https://meta.com",
    logo: Postgres,
  },
  {
    title: "Netlify",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
    logo: Netlify,
  },
  {
    title: "Vercel",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
    logo: Vercel,
  },
];
export const HomeStack = () => {
  return (
    <div className="h-screen w-full rounded-lg px-2.5">
      <div className="w-full rounded-lg bg-green-500">
        <h1>My tech stack</h1>
        {/* <HoverEffect items={projects} /> */}
      </div>
    </div>
  );
};
