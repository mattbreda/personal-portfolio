
import { HoverEffect } from "../ui/CardsHover";
export const projects = [
  {
    title: "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg",
  },
  {
    title: "TypeScript",
    link: "https://www.typescriptlang.org/",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg",
  },
  {
    title: "NodeJS",
    link: "https://nodejs.org/en",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  {
    title: "Three.js",
    link: "https://threejs.org/",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg",
  },
  {
    title: "Netlify",
    link: "https://www.netlify.com/",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg",
  },
  {
    title: "Vercel",
    link: "https://vercel.com/",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
  },

  {
    title: "React",
    link: "https://react.dev/",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    title: "NextJS",
    link: "https://nextjs.org/",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    title: "Vue",
    link: "https://vuejs.org/",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
  },
  {
    title: "Nuxt",
    link: "https://nuxt.com/",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original.svg",
  },
  {
    title: "TailwindCSS",
    link: "https://tailwindcss.com/",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    title: "Supabase",
    link: "https://supabase.com/",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
  },
];
export const HomeStack = () => {
  return (
    <div className=" w-full rounded-lg px-2.5">
      <div className="w-full rounded-lg bg-neutral-800 px-2.5 md:px-20">
        <h1 className="pt-10 md:pt-20 text-3xl font-semibold text-green-500">My tech stack</h1>
        <div className="w-full ">
          <HoverEffect items={projects} />
        </div>
      </div>
    </div>
  );
};
