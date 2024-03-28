import { AboutJobs } from "@/components/containers/AboutJobs";
import { EducationAndOther } from "@/components/containers/EducationAndOther";
import { GrowingLine } from "@/components/ui/GrowingLine";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col bg-neutral-800 pt-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="px-2.5 w-full">
          <TextGenerateEffect
            words="About"
            className=" text-5xl text-green-500"
          />
          <GrowingLine />
          <AboutJobs />
          <EducationAndOther />
        </div>
      </div>
    </main>
  );
}
