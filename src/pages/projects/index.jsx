import Navbar from "../../components/navbar";
import React from "react";
const projects = [
  {
    name: "pokedex starter",
    url: "https://pokedex-starter.pages.dev/",
    cover: "/resources/Projects/pokedex.png",
    description: "11111",
  },
  {
    name: "buyem",
    url: "https://buyem.pages.dev/",
    cover: "/resources/Projects/buyem.png",
    description: "111111",
  },
  {
    name: "xyz",
    url: "https://xyz-social-media.pages.dev/",
    cover: "/resources/Projects/xyz.png",
    description: "11111",
  },
  {
    name: "Countdown Date Picker",
    url: "https://countdown-datepicker.pages.dev/",
    cover: "/resources/Projects/datepicker.png",
    description: "111111",
  },
  // { name: "middle man", url: "", cover: "", description: "" },
];
export const ProjectsPage = () => {
  return (
    <>
      <Navbar />
      <div className="page">
        <div className="pt-4 flex md:flex-col sm:flex-col lg:flex-col xl:flex-row 2xl:flex-row ">
          {projects.map((el, index) => (
            <a
              key={index}
              href={el.url}
              target="_blank"
              rel="noreferrer"
              className="flex mt-4 mx-4 grow flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-6"
            >
              <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src={el.cover}
                alt={el.name}
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {el.name}{" "}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {el.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
