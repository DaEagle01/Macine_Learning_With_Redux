import React from "react";
import { Link } from "react-router-dom";

const Starter = () => {
  return (
    <div className="flex gap-4 md:flex-row flex-col">
      <div className="flex flex-col items-center max-w-md p-4 mx-auto my-0 border border-solid rounded-lg  sm:my-0 sm:p-6 md:my-8 md:p-8">
        <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
          Starter
        </h3>
        <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
          <p className="box-border m-0 text-6xl font-semibold leading-none border-solid">
            $35
          </p>
          <p
            className="box-border m-0 border-solid"
            style={{ borderImage: "initial" }}
          >
            / month
          </p>
        </div>
        <p className="mt-6 mb-5 text-base leading-normal text-left text-gray-900 border-0 border-gray-200">
          Ideal for Startups and Small Companies
        </p>
        <ul className="flex-1 p-0 mt-4 ml-5 leading-7 text-gray-900 border-0 border-gray-200">
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
            Automated Reporting
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
            Faster Processing
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
            Customizations
          </li>
        </ul>
        <Link
          to="/starterplan"
          className="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-purple-600 no-underline bg-transparent border border-purple-600 rounded-md cursor-pointer hover:bg-purple-700 hover:border-purple-700 hover:text-white focus-within:bg-purple-700 focus-within:border-purple-700 focus-within:text-white sm:text-base md:text-lg"
        >
          {" "}
          Select Plan
        </Link>
      </div>
      <div class=" ">
        <div class="py-12">
          <div class="  mx-auto bg-white shadow-lg rounded-lg   mx-2">
            <div class="md:flex ">
              <div class="w-full p-4 px-5 py-5">
                <div class="flex flex-row ">
                  <h2 class="text-3xl font-semibold">Machine</h2>
                  <h2 class="text-3xl text-purple-400 font-semibold">AI </h2>
                </div>
                <div class="flex flex-row pt-2 text-xs pt-6 pb-5">
                  {" "}
                  <span class="font-bold">Information</span>{" "}
                  <small class="text-gray-400 ml-1"></small>{" "}
                  <span class="text-gray-400 ml-1">Shopping</span>{" "}
                  <small class="text-gray-400 ml-1"></small>{" "}
                  <span class="text-gray-400 ml-1">Payment</span>{" "}
                </div>{" "}
                <span>Customer Information</span>
                <div class="relative pb-5">
                  {" "}
                  <input
                    type="text"
                    name="mail"
                    class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                    placeholder="E-mail"
                  />{" "}
                  <span class="absolute text-purple-500 right-2 top-4 font-medium text-sm">
                    Log out
                  </span>{" "}
                </div>{" "}
                <span>Shipping Address</span>
                <div class="grid md:grid-cols-2 md:gap-2">
                  {" "}
                  <input
                    type="text"
                    name="mail"
                    class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                    placeholder="First name*"
                  />{" "}
                  <input
                    type="text"
                    name="mail"
                    class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                    placeholder="Last name*"
                  />{" "}
                </div>{" "}
                <input
                  type="text"
                  name="mail"
                  class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                  placeholder="Company (optional)"
                />{" "}
                <input
                  type="text"
                  name="mail"
                  class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                  placeholder="Address*"
                />{" "}
                <input
                  type="text"
                  name="mail"
                  class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                  placeholder="Apartment, suite, etc. (optional)"
                />
                <div class="grid md:grid-cols-3 md:gap-2">
                  {" "}
                  <input
                    type="text"
                    name="mail"
                    class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                    placeholder="Zipcode*"
                  />{" "}
                  <input
                    type="text"
                    name="mail"
                    class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                    placeholder="City*"
                  />{" "}
                  <input
                    type="text"
                    name="mail"
                    class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                    placeholder="State*"
                  />{" "}
                </div>{" "}
                <input
                  type="text"
                  name="mail"
                  class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                  placeholder="Country*"
                />{" "}
                <input
                  type="text"
                  name="mail"
                  class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                  placeholder="Phone Number*"
                />
                <div class="flex justify-between items-center pt-2">
                  {" "}
                  <button
                    type="button"
                    class="h-12 w-24 text-purple-500 text-xs font-medium"
                  >
                    Return to cart
                  </button>{" "}
                  <button
                    type="button"
                    class="h-12 w-48 rounded font-medium text-xs bg-purple-500 text-white"
                  >
                    Continue to Shipping
                  </button>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Starter;
