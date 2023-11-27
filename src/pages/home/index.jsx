import React from "react";
import { softwareSkills } from "../../programminglanguage/index";
import Navbar from "../../components/navbar";

function HomePage() {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <div className='bg-[url("https://e1.pxfuel.com/desktop-wallpaper/18/270/desktop-wallpaper-1-batcave-batman-cave.jpg")] bg-cover h-full'>
          <div className="flex flex-row justify-between items-center ml-14 md:ml-28 lg:ml-28 py-4">
            <div>
              <h1 className="text-white text-2xl md:text-4xl ">
                Hello, World !
              </h1>
            </div>
            <div className="my-6">
              <h1 className="text-white text-sm md:text-4xl">
                I'm Woramongkol Vichayaworanan
              </h1>
              <p className="text-white text-sm md:text-4xl">
                a frontend developer based in Bangkok, Thailand.
              </p>
            </div>
            <div className="">
              <img
                className="max-h-screen"
                src="/resources/Pictures/fotor-ai-2023082910571-removebg.png"
                alt="profilepic"
              />
            </div>
          </div>
        </div>
        <section className="softwareskill py-20">
          {softwareSkills.map((el) => (
            <div className="my-5">
              <h1 className="text-center text-lg lg:text-3xl my-4 md:my-12 ">
                {el.name}
              </h1>
              <div className="flex flex-row items-center justify-center">
                {el.skills.map((language, index) => (
                  <div
                    key={index}
                    className="mx-4 md:mx-10 hover:scale-125 transition transition ease-in-out"
                  >
                    <img
                      src={language.url}
                      alt={language.name}
                      className="w-10 md:w-20 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}

export default HomePage;
