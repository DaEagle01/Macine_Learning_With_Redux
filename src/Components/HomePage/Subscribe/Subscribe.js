import React from "react";

const Subscribe = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center space-y-16 my-12 bg-purple-100 py-24">
        <div>
          <h1 className="text-3xl text-gray-600  font-bold">
            Subscribe For Newsletter
          </h1>
          <p className="font-bold  text-gray-600 text-lg">
            Get the latest technology news
          </p>
        </div>
        <div className="md:space-x-24 bg-white px-6 py-3 rounded-full">
          <input
            className=" "
            type="text"
            placeholder="Your Email"
            name="email"
            id="email"
          />
          <button className="border border-purple-600 bg-purple-300 px-4 py-3 rounded-full font-bold text-lg text-white">
            Subscribe
          </button>
        </div>
      </div>
      <>
        {/* <div className="flex justify-center flex-wrap mt-5">
        <div className="m-3 py-5 px-5 bg-purple-300 rounded inline-block">
          <p className="text-gray-700 font-bold text-sm">Join our newsletter</p>
          <div className="flex justify-between mb-3">
            <input
              className="mr-3 shadow-inner text-gray-700 rounded px-3 text-sm bg-purple-400 border-b border-purple-700"
              placeholder="Enter your email"
              type="text"
            />
            <button className="shadow-lg bg-blue-600 text-gray-700 font-bold text-sm rounded px-3 py-2">
              Subscribe
            </button>
          </div>
          <label className="text-sm text-gray-700 mt-3 block">
            <div className="inline-block bg-purple-900 shadow-inner border-b border-purple-700 rounded h-4 w-4">
              <input className="appearance-none" type="checkbox" />
            </div>
            <span className="">send me occasional promotional emails</span>
          </label>
        </div> 
      </div> */}
      </>
    </>
  );
};

export default Subscribe;
