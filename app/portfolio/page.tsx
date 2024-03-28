import { CardBody, CardContainer, CardItem } from "@/components/ui/3DCard";
import { BentoGrid } from "@/components/ui/BentoGrid";
import { BentoGridItem } from "@/components/ui/BentoItem";
import { GrowingLine } from "@/components/ui/GrowingLine";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "AA*",
    categories: ["website"],
    tech: ["Next", "Prismic"],
    description: "Website and digital magazine (Cipolla).",
    url: "https://www.the-syllabus.com/",
    image: "",
  },
  {
    title: "The Syllabus",
    categories: ["webapp", "website"],
    tech: ["Next", "Prismic"],
    description:
      "Digital platform divided in three main parts, an open website with a blog, a webapp (subscription based) and a search engine (available only for subscribers).",
    url: "https://www.the-syllabus.com/",
    image: "",
  },
  {
    title: "Future of Work - Digital Archive",
    categories: ["webapp"],
    tech: ["React"],
    description:
      "A platform to search high quality content on the future of work and the digital transition.",
    url: "https://futureofwork.fes.de/digital-archive",
    image: "",
  },

  {
    title: "Edge*",
    categories: ["website"],
    tech: ["Nuxt", "Prismic"],
    description: "Website and digital magazine (Cipolla).",
    url: "https://www.the-syllabus.com/",
    image: "",
  },
  {
    title: "Giulia Faraon",
    categories: ["website"],
    tech: ["Nuxt", "Prismic"],
    description: "Website and digital magazine (Cipolla).",
    url: "https://www.the-syllabus.com/",
    image: "",
  },
  {
    title: "Bea*",
    categories: ["website"],
    tech: ["Next", "Prismic", "Algolia"],
    description: "Website and digital magazine (Cipolla).",
    url: "https://www.the-syllabus.com/",
    image: "",
  },
  {
    title: "FKTwkit",
    categories: ["website"],
    tech: ["Nuxt"],
    description: "Website and digital magazine (Cipolla).",
    url: "https://www.the-syllabus.com/",
    image: "",
  },
];

export default function Portfolio() {
  return (
    <main className="flex h-screen min-h-screen flex-col items-center justify-between max-md:pb-[5vh] pt-10 w-full">
      <div className="max-w-[1400px] mx-auto w-full  h-full">
        <div className="w-full h-full px-2.5 flex flex-col">
          <TextGenerateEffect
            words="Portfolio"
            className=" text-5xl text-green-500"
          />
          <GrowingLine />
          <BentoGrid className="w-full mx-auto">
            {projects.map((item, i) => (
              <CardContainer
                key={i}

                /*               className={`${
                i === 1 || i === 5 ? "md:col-span-2" : ""
              } bg-neutral-700 text-slate-100 justify-start`} */
              >
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    {item.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    {item.description}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src="/forest.webp"
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-20">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href="https://twitter.com/mannupaaji"
                      target="__blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      Try now →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      Sign up
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            ))}
          </BentoGrid>
        </div>
      </div>
    </main>
  );
}
