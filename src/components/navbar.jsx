import React from "react";

function Navbar() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 w-full fixed">
      <div className="max-x-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 mx-16">
        <a href="/" class="flex items-center">
          <img
            src="https://scontent.fbkk12-3.fna.fbcdn.net/v/t39.30808-6/312167791_441575541390422_3599715184732973856_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEYBBYmNGrT79I5VjlRQbsL-DbuwkIjU4z4Nu7CQiNTjA3DHKkpWjsjq27o7taJT_KTYtpIvYiO7tiZ84tXJAQ7&_nc_ohc=RF0lKKyDH3kAX_bElr-&_nc_ht=scontent.fbkk12-3.fna&oh=00_AfAO7i-8yeqr7PPgy5gDugNiXC3qNX7sb5wRY3fJYKzycA&oe=64F1CEAE"
            class="h-8 mr-3"
            alt="WVLogo"
          />
          {/* <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span> */}
        </a>
        {/* <button data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button> */}
        <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <a
              href="/about"
              class="group text-black transition duration-300 hover:text-gray-400"
            >
              about
              <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black m-auto"></span>
            </a>
          </li>
          <li>
            <a
              href="/worknexperience"
              class="group text-black transition duration-300 hover:text-gray-400"
            >
              Work/experience
              <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black m-auto"></span>
            </a>
          </li>
          <li className="relative flex justify-center items-center ">
            <button
              className="
                        relative flex justify-center items-center
                        text-black rounded focus-ring ring-gray-200 group
                        "
            >
              <p className="px-2 group text-black transition duration-300 hover:text-gray-400">
                contact
                <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black m-auto"></span>
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </span>

              <div className="absolute hidden group-focus:block top-full min-w-full w-max bg-white shadow-md mt-1 rounded transition">
                <ul className="text-left border rounded">
                  <li className="px-4 py-1 hover:bg-gray-100 border-b">
                    <a
                      href="https://github.com/Purrrgrammer"
                      target="_blank"
                      rel="noreferrer"
                    >
                      github:purrgrammer
                    </a>
                  </li>
                  <li className="px-4 py-1 hover:bg-gray-100 border-b">
                    <a
                      href="https://www.linkedin.com/in/woramjvic/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      lkn:woramjvic
                    </a>
                  </li>
                  <li className="px-4 py-1 hover:bg-gray-100 border-b">
                    woram.j.vic@gmail.com
                  </li>
                  <li className="px-4 py-1 hover:bg-gray-100 border-b">
                    +66 806495969
                  </li>
                </ul>
              </div>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
