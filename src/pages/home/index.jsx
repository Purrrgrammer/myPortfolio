import React from "react";
import { softwareSkills } from "../../programminglanguage/index";
function HomePage() {
  return (
    <div className="pt-16">
      <div className='bg-[url("https://e1.pxfuel.com/desktop-wallpaper/18/270/desktop-wallpaper-1-batcave-batman-cave.jpg")] bg-cover h-full   '>
        <div className="flex flex-row justify-between items-center ml-14 md:ml-28 lg:ml-28">
          <div>
            <h1 className=" text-white text-5xl ">Hello, World !</h1>
          </div>
          <div className="">
            <h1 className="text-white xl:text-5xl">
              I'm Woramongkol Vichayaworanan
            </h1>
            <p className="text-white text-lg">
              a frontend developer based in Thailand.
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
      <section className="softwareskill my-5 page">
        {softwareSkills.map((el) => (
          <div className="py-5">
            <div className="my-7">
              <h1 className="text-center text-lg lg:text-3xl xl:text-5xl">
                {el.name}
              </h1>
            </div>
            <div className="flex flex-row items-center justify-around">
              {el.skills.map((language, index) => (
                <div key={index} className="mx-2">
                  <img
                    src={language.url}
                    alt={language.name}
                    className="h-20"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default HomePage;
