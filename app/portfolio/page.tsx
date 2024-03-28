import { ProjectsGrid } from "@/components/containers/ProjectsGrid";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3DCard";
import { BentoGrid } from "@/components/ui/BentoGrid";
import { BentoGridItem } from "@/components/ui/BentoItem";
import Button from "@/components/ui/Button";
import { GrowingLine } from "@/components/ui/GrowingLine";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import Image from "next/image";
import Link from "next/link";


export default function Portfolio() {
  return (
    <main className="flex h-screen min-h-screen flex-col items-center justify-between max-md:pb-[5vh] pt-10 w-full">
      <div className="max-w-[1400px] mx-auto w-full  h-full">
        <div className="w-full h-full px-2.5">
          <TextGenerateEffect
            words="Portfolio"
            className=" text-5xl text-green-500"
          />
          <GrowingLine className=""/>
         <ProjectsGrid />
        </div>
      </div>
    </main>
  );
}
