"use client";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../ui/3DCard";
import { BentoGrid } from "../ui/BentoGrid";
import Button from "../ui/Button";
import { ModalProjects } from "../ui/ModalProjects";
import { useState } from "react";
import giulia1 from "@/public/screens/giulia-1.jpg";
import giulia2 from "@/public/screens/giulia-2.jpg";
import ts1 from "@/public/screens/ts-1.jpg";
import ts2 from "@/public/screens/ts-2.jpg";
import edge1 from "@/public/screens/edge-1.jpg";
import edge2 from "@/public/screens/edge-2.jpg";
import bea1 from "@/public/screens/bea-1.jpg";
import bea2 from "@/public/screens/bea-2.jpg";
import ftw1 from "@/public/screens/ftw-1.jpg";
import ftw2 from "@/public/screens/ftw-2.jpg";

const projects = [
  {
    title: "Giulia Faraon",
    categories: ["website"],
    tech: ["Nuxt", "Prismic"],
    description:
      "Personal website and portfolio made for Giulia Faraon, art director and digital designer. The frontend is built using Nuxt.js while the content is provided by Prismic, the headless CMS.",
    url: "https://giuliafaraon.com/",
    image: "/screens/giulia-1-scaled.jpg",
    images: [giulia1, giulia2],
  },
  {
    title: "The Syllabus",
    categories: ["webapp", "website"],
    tech: ["Next", "Prismic", "React"],
    description:
      "Digital platform divided in three main parts, an open website with a blog, a webapp (subscription based) and a search engine (available only for subscribers). The website and the private area are made using Next.js and Prismic, while the frontend of the search engine is made with React. *Project made in collaboration with Noter",
    url: "https://www.the-syllabus.com/",
    image: "/screens/ts-1-scaled.jpg",
    images: [ts1, ts2],
  },
  {
    title: "Edge*",
    categories: ["website"],
    tech: ["Nuxt", "Prismic"],
    description:
      "Institutional website made for Edge MGMT. The frontend is built using Nuxt.js while the content is provided by Prismic, the headless CMS. *Project made in collaboration with Noter",
    url: "https://www.edgemgmt.it/",
    image: "/screens/edge-1-scaled.jpg",
    images: [edge1, edge2],
  },
  /*  {
    title: "Future of Work - Digital Archive",
    categories: ["webapp"],
    tech: ["React"],
    description:
      "A platform to search high quality content on the future of work and the digital transition.",
    url: "https://futureofwork.fes.de/digital-archive",
    image: "",
  }, */

  {
    title: "Bea*",
    categories: ["website"],
    tech: ["Next", "Prismic", "Algolia"],
    description:
      "Institutional website Website and digital magazine (Cipolla) made for BEA.The frontend is built using Next.js while the content is provided by Prismic, the headless CMS. *Project made in collaboration with Noter",
    url: "https://www.beamediacompany.com/",
    image: "/screens/bea-1-scaled.jpg",
    images: [bea1, bea2],
  },
  {
    title: "FKTwkit",
    categories: ["website"],
    tech: ["Nuxt"],
    description:
      "Landing page made for Design&Develop products Jevero and Botcha. The page is made with Next.js while the form is handled by netlify lambda function.",
    url: "https://www.the-syllabus.com/",
    image: "/screens/ftw-1-scaled.jpg",
    images: [ftw1, ftw2],
  },
];

export const ProjectsGrid = () => {
  const [selectedProject, setSelectedProject] = useState({});
  const [showModal, setShowModal] = useState(false);
  const handleClick = (project: object) => {
    setSelectedProject(project);
    setShowModal(true);
  };
  return (
    <>
      <BentoGrid className="w-full mx-auto py-2.5">
        {projects.map((item, i) => (
          <CardContainer
            key={i}
            containerClassName={`${
              i === 1 ? "md:col-span-2" : ""
            }  justify-start`}
          >
            <CardBody className="bg-neutral-700 relative group/card  border-black/[0.1] w-full h-auto rounded-xl p-2.5 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-green-500 dark:text-white"
              >
                {item.title}
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                <div className="flex flex-row gap-x-2.5">
                  {item.categories.map((cat) => (
                    <div
                      key={item.title + cat}
                      className="text-slate-100 bg-slate-100/20 text-xs border border-slate-100 rounded-lg px-2.5"
                    >
                      {cat}
                    </div>
                  ))}
                </div>
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-2.5">
                <Image
                  src={item.image}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-end items-center mt-2.5">
                <CardItem translateZ={20}>
                  <Button label="Explore" onClick={() => handleClick(item)} />
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </BentoGrid>
      <ModalProjects
        projectDetails={selectedProject}
        isOpen={showModal}
        close={() => setShowModal(false)}
      />
    </>
  );
};
