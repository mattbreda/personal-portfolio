"use client";
export const DiscoverMore = () => {
  const scrollTo = () => {
    const element = document.getElementById("scroll-to");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <button
      className=" text-base px-4 py-2 border-2 border-green-500 rounded-md flex self-start bg-green-500 text-slate-100 hover:bg-transparent hover:text-green-500 hover:shadow-[4px_4px_0px_0px_rgba(34,177,94)] transition duration-200"
      onClick={() => scrollTo()}
    >
      Discover more
    </button>
  );
};
