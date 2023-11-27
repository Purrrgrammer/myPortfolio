import Navbar from "../../components/navbar";
import React from "react";
const projects = [
  {
    name: "pokedex starter",
    url: "https://pokedex-starter.pages.dev/",
    cover: "/resources/Projects/pokedex.png",
    tools: ["react", "zustand"],
    description:
      "Servicing pokemon basic detail, element, abilities and stats from PokéAPI",
  },
  {
    name: "buyem",
    url: "https://buyem.pages.dev/",
    cover: "/resources/Projects/buyem.png",
    tools: ["react", "redux"],
    description:
      "E-commerce platform which data is fetched from Fake Store API and some were imitated within localStorage and services (as API), using other library such as React Router for routing, React Toolkit for state management, and Bootstrap for CSS. *p.s.ID and Password is bubblegummy",
  },
  {
    name: "xyz",
    url: "https://xyz-social-media.pages.dev/",
    cover: "/resources/Projects/xyz.png",
    tools: ["react"],
    description:
      "Servicing pokemon basic detail, element, abilities and stats from PokéAPI",
  },
  {
    name: "Countdown Date Picker",
    url: "https://countdown-datepicker.pages.dev/",
    cover: "/resources/Projects/datepicker.png",
    tools: ["react"],
    description:
      "Countdown app calculated by current time and date selected from date-picker",
  },
  // { name: "middle man", url: "", cover: "", description: "" },
];
export const ProjectsPage = () => {
  return (
    <>
      <Navbar />
      <div className="page">
        <div className="pt-4 grid grid-cols-1 2xl:grid-cols-3 lg:grid-cols-2 gap-4 content-center justify-items-center	">
          {projects.map((el, index) => (
            <a
              key={index}
              href={el.url}
              target="_blank"
              rel="noreferrer"
              className="flex w-full p-4 mt-4 mx-4 grow flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="flex flex-col items-center justify-between h-full">
                <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {el.name}{" "}
                </h5>
                <div className="flex flex-col sm:flex-row items-center ">
                  <img
                    className="object-cover md:object-contain w-full rounded-t-lg h-52 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg "
                    src={el.cover}
                    alt={el.name}
                  />
                  <div className="flex flex-col p-4 leading-normal">
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      {el.description}
                    </p>
                  </div>
                </div>
                <div className="box my-4">
                  <u>tools:</u>{" "}
                  {el.tools.map((el) => (
                    <span className="mr-2">{el}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
