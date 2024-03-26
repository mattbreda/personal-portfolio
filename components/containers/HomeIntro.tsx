import Image from "next/image";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";
import Button from "../ui/Button";

export const HomeIntro = () => {
  return (
    <section className="w-full px-2.5 pb-2.5 md:h-screen">
      <div className="rounded-2xl relative w-full h-full bg-neutral-700 bg-dot-white/[0.2] flex flex-col md:flex-row items-center">
        <div className="absolute rounded-2xl pointer-events-none inset-0 flex items-center justify-center  bg-neutral-700 [mask-image:radial-gradient(ellipse_at_center,transparent_70%,white)] md:[mask-image:radial-gradient(ellipse_at_center,transparent_50%,white)]"></div>

        <div className="w-full pt-5 px-2.5 md:w-2/3 md:p-20">
          <TextGenerateEffect
            words="How can I help you?"
            className="mb-5 underline text-2xl text-4xl font-semibold text-white"
          />
          <TextGenerateEffect
            words="I am a passionate Frontend Developer specialized in JavaScript. With a keen eye for detail and a knack for crafting engaging user experiences, thanks to my Data Visualization background I thrive in turning complex data sets into meaningful visual narratives."
            className="text-xl md:text-2xl font-medium text-white"
          />
        </div>
        <div className="w-full max-md:pt-5  max-md:pb-10 max-md:px-2.5 md:w-1/3 flex flex-row flex-wrap gap-5 md:pr-20">
          <Button label="Websites" />
          <Button label="Dashboards" />
          <Button label="Longforms" />
          <Button label="Widgets" />
          <Button label="Api's" />
          <Button label="DB's" />
          <Button label="Data Visualizations" />
          <Button label="Web apps" />
        </div>
      </div>
    </section>
  );
};
