import React from "react";
import { experience } from "../../resource/index";
// import WorkCard from "../../components/cards/card1";
import {
  threeddesign,
  threeddesign2,
  rendered,
  rendered2,
} from "../../resource/tuwork/index";
import { Design, Design2, Banner, Game } from "../../resource/Design/index2";
import { Envi } from "../../resource/Sabuy 3D/index";
import Navbar from "../../components/navbar";
import {
  OakVille,
  Road,
  Road2,
  bkmap,
  etc,
  housetypo,
} from "../../resource/urban planning";
import Carousel from "../../components/carousel/Carousel";
import Carousel2 from "../../components/carousel/Carousel2";
import CarouselSm from "../../components/carousel/CarouselSm";
import CarouselSm2 from "../../components/carousel/CarouselSm2";
import ProjectJumper from "../../components/ProjectJumper/ProjectJumper";
function WorkandExperiencePage() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="page">
        <section className="exp">
          <h1 className="text-3xl section">Experience</h1>
          <ol class="relative border-l border-gray-200 dark:border-gray-700 ml-4">
            {experience.map((exp, index) => {
              return (
                <li class="mb-10 ml-4">
                  <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    {exp.period}
                  </time>
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                    {exp.position} | @ {exp.place}
                  </h3>
                  <ul>
                    {exp.work.map((w, index) => (
                      <li key={index}>- {w}</li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ol>
        </section>
        <ProjectJumper />
        <Carousel2
          data={threeddesign}
          data2={threeddesign2}
          id={"inter-collabonature"}
          id2={"inter-collabonature(2)"}
        />
        <Carousel2
          data={rendered}
          data2={rendered2}
          id={"render"}
          id2={"render(2)"}
        />
        <Carousel data={Envi} id={"3d"} />
        <CarouselSm2
          data={Design}
          data2={Design2}
          id={"banner"}
          id2={"banner(2)"}
        />
        <CarouselSm2 data={Banner} data2={Game} id={"banner(3)"} id2={"game"} />
        {/* <Carousel1 data={Banner} id={"banner(3)"} />
        <Carousel1 data={Game} id={"game"} /> */}
        <Carousel data={bkmap} id={"urban planning"} />
        <Carousel data={housetypo} id={"house typo"} />
        <CarouselSm data={OakVille} id={"oakville"} />
        <Carousel2 data={Road} data2={Road2} id={"road"} id2={"road(2)"} />
        <CarouselSm data={etc} id={"etc"} />
      </div>
    </React.Fragment>
  );
}

export default WorkandExperiencePage;
