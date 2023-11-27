import React from "react";
import { education } from "../../resource/index";
import Navbar from "../../components/navbar";
function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="page">
        <div className="m-4 p-2 lg:p-10 text-base lg:text-3xl ">
          A passionate frontend developer with the previos backgrourd of graphic
          desinging, comprehensive aspect of real estate market analysis,
          project management for real estate development, feasibility, and
          facility management. For extent, having a good interpersonal
          communication, professional attitute, hands-on with various software,
          adaptive in diverse environment with willingness to grow within
          continuous personal and professional development. Seeking for a
          challenging role to leverage myself within a career progressive.
        </div>
        <section className="">
          <h1 className="text-3xl section">education</h1>
          <ol class="relative border-l border-gray-200 dark:border-gray-700 ml-4">
            {education.map((edu, index) => {
              return (
                <li class="mb-10 ml-4">
                  <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    {edu.year}
                  </time>
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                    {edu.place}
                  </h3>
                </li>
              );
            })}
          </ol>
        </section>
      </div>
    </>
  );
}

export default AboutPage;
