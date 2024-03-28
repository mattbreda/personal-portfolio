import Image from "next/image";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";
import Button from "../ui/Button";
import Link from "next/link";
import { DiscoverMore } from "../ui/DiscoverMore";

export const HomePageHero = () => {
  return (
    <section className="w-full h-screen flex flex-col md:grid md:grid-cols-2 gap-2.5 p-2.5">
      <div className="w-full rounded-2xl bg-neutral-800 text-slate-100 p-5 flex flex-col justify-center">
        <h1 className="text-2xl md:text-4xl">
          Hi, I&apos;m <span className="text-green-500">Matteo</span>
        </h1>
        <h1 className="">
          <TextGenerateEffect
            words="JavaScript developer"
            className="text-3xl md:text-6xl font-medium text-white"
          />
        </h1>
        <div className="mt-10 flex flex-col md:flex-row gap-5 items-start">
          <Link href="/contact"><Button label="Contact me" /></Link>
          <DiscoverMore />
        </div>
      </div>
      <div className="w-full max-md:flex-grow md:h-full rounded-2xl bg-green-500 flex flex-col justify-end group overflow-hidden">
        <div className="relative h-2/3">
          <Image
            src="/BN_B.png"
            fill
            className="object-contain mt-auto rounded-2xl bg-bottom mix-blend-multiply group-hover:scale-125 transition-all duration-700 ease-in-out"
            alt="A photo of Matteo"
          />
        </div>
      </div>
    </section>
  );
};
