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
        <div className="pt-4 flex flex-col lg:flex-row ">
          {projects.map((el, index) => (
            <a
              key={index}
              href={el.url}
              target="_blank"
              rel="noreferrer"
              className="flex p-6 mt-4 mx-4 grow flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src={el.cover}
                alt={el.name}
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {el.name}{" "}
                </h5>
                <p>
                  <u>tools:</u>{" "}
                  {el.tools.map((el) => (
                    <span className="mr-2">{el}</span>
                  ))}
                </p>
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
