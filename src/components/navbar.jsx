import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
function Navbar() {
  const [isToggle, setIsToggle] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 720) {
      setIsToggle(true);
    }
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsToggle(true)
    );
  }, []);
  const toggle = React.useCallback(
    () => setIsToggle((state) => !state),
    [setIsToggle]
  );

  const links = [
    { name: "about", path: "/about" },
    { name: "work/experience", path: "/worknexperience" },
  ];
  const mediaChannel = [
    { name: "github", path: "https://github.com/Purrrgrammer" },
    { name: "lkn:woramjvic", path: "https://www.linkedin.com/in/woramjvic/" },
    {
      name: "woram.j.vic@gmail.com",
      path: "https://www.linkedin.com/in/woramjvic/",
    },
    { name: "+66 806495969", path: "https://www.linkedin.com/in/woramjvic/" },
  ];

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 w-full fixed max-x-screen-xl flex justify-between flex-wrap items-center mx-auto p-4 px-[100px] z-2">
      <a href="/home">
        <img
          src="https://scontent.fbkk12-3.fna.fbcdn.net/v/t39.30808-6/312167791_441575541390422_3599715184732973856_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Xgv_W8bK_BcAX8ZyT3-&_nc_ht=scontent.fbkk12-3.fna&oh=00_AfAY-y_TPshBO5iaPneUF0-48Teml7SeeHQL0m7gprLlZQ&oe=6556A96E"
          className="h-10 mr-3"
          alt="WVLogo"
        />
      </a>
      <span className="text-3xl cursor-ponter md:hidden block">
        <ion-icon name="menu-outline" onClick={toggle}></ion-icon>
      </span>
      <ul
        className={`
        ${
          isToggle ? "-bottom-28 opacity-100 " : "opacity-0 -top-30"
        } my-2 trasnsition-all ease-in duration-500 absolute w-full md:py-4 xs:opacity-100 left-0 md:w-auto md:static z-[-1] md:-top-120px md:z-auto md:flex md:items-center md:p-0 md:dark:bg-gray-900 md:flex-row md:space-x-8 md:mt-0 flex-col font-medium p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:border-0 bg-white md:bg-gray dark:bg-gray-800 dark:border-gray-700`}
      >
        {links.map((link, index) => (
          <li className="px-2" key={index}>
            <NavLink
              to={link.path}
              className="group text-black transition duration-300 hover:text-gray-400"
              style={({ isActive, isPending, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isPending ? "red" : "black",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
            >
              {link.name}
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black m-auto"></span>
            </NavLink>
          </li>
        ))}
        <li className="relative flex justify-center items-center ">
          <button
            className="
                        relative flex justify-center items-center
                        text-black rounded focus-ring ring-gray-200 group
                        "
          >
            <p className="px-2 group text-black transition duration-300 hover:text-gray-400">
              contact
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black m-auto"></span>
            </p>
            <span className="border-l hover:bg-gray-100  ">
              <svg
                className="w-2.5 h-2.5 ml-2 "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </span>
            <div className="absolute hidden group-focus:block top-full min-w-full w-max bg-wh ite shadow-md mt-1 rounded transition">
              <ul className="text-left border rounded">
                {mediaChannel.map((link, index) => (
                  <li
                    className="px-4 py-1 hover:bg-gray-100 border-b"
                    key={index}
                  >
                    <a href={link.path} target="_blank" rel="noreferrer">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
