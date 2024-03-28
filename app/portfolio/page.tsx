import { ProjectsGrid } from "@/components/containers/ProjectsGrid";
import { GrowingLine } from "@/components/ui/GrowingLine";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";

export default function Portfolio() {
  return (
    <main className="flex h-screen min-h-screen flex-col items-center justify-between max-md:pb-[5vh] pt-2.5 md:pt-10 w-full">
      <div className="max-w-[1400px] mx-auto w-full  h-full">
        <div className="w-full h-full px-2.5">
          <TextGenerateEffect
            words="Portfolio"
            className="text-3xl md:text-5xl text-green-500"
          />
          <GrowingLine className="" />
          <ProjectsGrid />
        </div>
      </div>
    </main>
  );
}
