import React from "react";

const Footer = () => {
  return (
    <div>
      {" "}
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ede9fe"
            fill-opacity="1"
            d="M0,64L40,101.3C80,139,160,213,240,224C320,235,400,181,480,170.7C560,160,640,192,720,181.3C800,171,880,117,960,128C1040,139,1120,213,1200,240C1280,267,1360,245,1400,234.7L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>
      <footer class="bg-purple-100 border-gray-200">
        <div
          class="
          container
          flex flex-col flex-wrap
          px-4
          pb-8
          mx-auto
          md:items-center
          lg:items-start
          md:flex-row md:flex-nowrap
        "
        >
          <div class="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
            <a
              class="
              flex
              items-center
              justify-center
              text-4xl
              font-bold
              text-blue-700
              md:justify-start
            "
            >
              Logo
            </a>
            <p class="mt-2 text-sm text-justify text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium at sequi cum, impedit fuga in placeat illo eum minima
              possimus est perferendis distinctio explicabo eos natus
              consequuntur blanditiis odio optio?
            </p>
            <div class="flex mt-4">
              <input
                type="text"
                class="
                h-auto
                p-2
                text-sm
                border border-grey-light
                round
                text-grey-dark
              "
                placeholder="Your email address"
              />
              <button class="h-auto p-3 text-xs text-white bg-red-600 rounded-sm">
                Subscribe
              </button>
            </div>
            <div class="flex justify-center mt-4 lg:mt-2">
              <a>
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-6 h-6 text-blue-600"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-3">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-6 h-6 text-blue-300"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-3">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-6 h-6 text-pink-400"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a class="ml-3">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  class="w-6 h-6 text-blue-500"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </div>
          </div>
          <div class="justify-between w-full mt-4 text-left lg:flex">
            <div class="w-full px-4 lg:w-1/3 md:w-1/2">
              <h2 class="mb-2 font-bold tracking-widest text-gray-900">
                Useful Links
              </h2>
              <ul class="mb-8 space-y-2 text-sm list-none">
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Home</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">About Us</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Blogs</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Contact Us</a>
                </li>
              </ul>
            </div>
            <div class="w-full px-4 lg:w-1/3 md:w-1/2">
              <h2 class="mb-2 font-bold tracking-widest text-gray-900">
                Useful Links
              </h2>
              <ul class="mb-8 space-y-2 text-sm list-none">
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Home</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">About Us</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Blogs</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Contact Us</a>
                </li>
              </ul>
            </div>
            <div class="w-full px-4 lg:w-1/3 md:w-1/2">
              <h2 class="mb-2 font-bold tracking-widest text-gray-900">
                Useful Links
              </h2>
              <ul class="mb-8 space-y-2 text-sm list-none">
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Home</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">About Us</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Blogs</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="flex justify-center ">
          <p class="text-base text-gray-400">
            All rights reserved by @ company 2021
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;