import React from "react";

const ProjectJumper = () => {
  const header = [
    { id: "#inter-collabonature" },
    { id: "#render" },
    { id: "#3d" },
    { id: "#banner" },
    // { id: "#game" },
    { id: "#urban planning" },
    { id: "#etc" },
  ];
  return (
    <div className="flex flex-col w-full items-center">
      <h1 className="m-auto text-3xl my-10">to...</h1>
      <div className="flex ">
        {header.map((el) => (
          <a href={el.id} className="px-2 text-xs lg:px-20 lg:text-xl my-5">
            {el.id.slice(1)}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectJumper;
