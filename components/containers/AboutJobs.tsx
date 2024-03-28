import Accordion from "../ui/Accordion";
import { CodingIllustration } from "../ui/CodingIllustration";
import { LinkedinCard } from "../ui/LinkedinCard";

export const jobs = [
  {
    title: "Sky Italia",
    period: "2018-2019",
    position: "Frontend Developer",
    description:
      "In Sky worked in two different agile teams; in the first one I took care about the JS based video player, implementing new features and refactoring old ones. In the second team I worked on the development of the Design System of Sky Editorial websites",
    stack: ["JavaScript", "HTML", "SASS", "Adobe AEM", "JWPlayer"],
  },
  {
    title: "Crispy Bacon",
    period: "2019",
    position: "Frontend Developer",
    description:
      "In Crispy Bacon I worked for a brief period as an in house consultat for a client refactoring a React based application",

    stack: ["JavaScript", "React"],
  },
  {
    title: "The Visual Agency",
    period: "2020-2022",
    position: "Fullstack Developer",
    description:
      "In The Visual Agency I worked in the Interactive team where we produced dashboards and long forms. I followed all the development phases, from the first conversations with the clients to the go live of the products.",

    stack: ["JavaScript", "React", "Vue", "D3.js", "Node.js", "PostgresSQL"],
  },
  {
    title: "Palazzina Creativa",
    period: "2022-2023",
    position: "Frontend Developer",
    description:
      "In PalazzinaCreativa I participated in the development of Websites, e-commerces and web-apps. There I mostly focused on the frontend development.",
    stack: [
      "JavaScript",
      "Nuxt",
      "Vue",
      "WordPress Headless",
      "Shopify",
      "WooCommerce",
      "Three.js",
    ],
  },
  {
    title: "Mohole School",
    period: "2023",
    position: "Teacher",
    description:
      "In Mohole I held a JavaScript course for begginers introducing the principles of Javascript development.",
    stack: ["JavaScript"],
  },
  {
    title: "Noter",
    period: "2023 - Currently",
    position: "Freelance Frontend Developer",
    description:
      "In Noter I collaborate as freelance developer. We develop websites, longforms, webapps and ecommerces",
    stack: ["React", "Next.js", "Nuxt", "Supabase", "Prismic", "Three.js"],
  },
];

export const AboutJobs = () => {
  return (
    <div className="w-full rounded-lg bg-neutral-700 bg-dot-white/[0.2]  mt-2.5 p-2.5 flex flex-col">
      <h1 className="text-2xl md:text-3xl font-semibold text-green-500 mb-2.5">
        My work experience
      </h1>
      <div className="w-full flex flex-col md:flex-row gap-x-5">
        <div className="w-full md:w-3/4 rounded-lg">
          <div className="w-full flex flex-col gap-2.5">
            {jobs.map((j) => {
              return (
                <Accordion
                  key={j.title}
                  title={j.title}
                  period={j.period}
                  position={j.position}
                  description={j.description}
                  stack={j.stack}
                />
              );
            })}
          </div>
        </div>
        <div className=" max-md:mt-2.5 w-full md:w-1/4">
          <LinkedinCard />
        </div>
      </div>
    </div>
  );
};
