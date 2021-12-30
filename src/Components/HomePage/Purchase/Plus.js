import React from "react";
import { Link } from "react-router-dom";

const Plus = () => {
  return (
    <div>
      <div className="relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 border border-solid rounded-lg lg:-ml-3 sm:my-0 sm:p-6 md:my-8 md:p-8">
        <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
          Plus
        </h3>
        <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
          <p className="box-border m-0 text-6xl font-semibold leading-none border-solid">
            $120
          </p>
          <p
            className="box-border m-0 border-solid"
            style={{ borderImage: "initial" }}
          >
            / month
          </p>
        </div>
        <p className="mt-6 mb-5 text-base leading-normal text-left text-gray-900 border-0 border-gray-200">
          Ideal for larger and enterprise companies
        </p>
        <ul className="flex-1 p-0 mt-4 leading-7 text-gray-900 border-0 border-gray-200">
          <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
            <svg
              className="w-5 h-5 mr-2 font-semibold leading-7 text-purple-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            Everything in Basic
          </li>
          <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
            <svg
              className="w-5 h-5 mr-2 font-semibold leading-7 text-purple-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            Unlimited Builds
          </li>
          <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
            <svg
              className="w-5 h-5 mr-2 font-semibold leading-7 text-purple-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            Advanced Analytics
          </li>
          <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
            <svg
              className="w-5 h-5 mr-2 font-semibold leading-7 text-purple-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            Company Evaluations
          </li>
        </ul>
        <Link
          to="/plusplan"
          className="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-purple-600 no-underline bg-transparent border border-purple-600 rounded-md cursor-pointer hover:bg-purple-700 hover:border-purple-700 hover:text-white focus-within:bg-purple-700 focus-within:border-purple-700 focus-within:text-white sm:text-base md:text-lg"
        >
          {" "}
          Select Plan
        </Link>
      </div>
    </div>
  );
};

export default Plus;
