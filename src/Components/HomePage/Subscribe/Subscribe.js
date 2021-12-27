import React from "react";

const Subscribe = () => {
  return (
    <div>
      <div class="flex justify-center flex-wrap mt-5">
        <div class="m-3 py-5 px-5 bg-gray-800 rounded inline-block">
          <p class="text-white font-bold text-sm">Join our newsletter</p>
          <div class="flex justify-between mb-3">
            <input
              class="mr-3 shadow-inner text-white rounded px-3 text-sm bg-gray-900 border-b border-gray-700"
              placeholder="Enter your email"
              type="text"
            />
            <button class="shadow-lg bg-blue-600 text-white font-bold text-sm rounded px-3 py-2">
              Subscribe
            </button>
          </div>
          <label class="text-sm text-white mt-3 block">
            <div class="inline-block bg-gray-900 shadow-inner border-b border-gray-700 rounded h-4 w-4">
              <input class="appearance-none" type="checkbox" />
            </div>
            <span class="">send me occasional promotional emails</span>
          </label>
        </div> 
      </div>
    </div>
  );
};

export default Subscribe;
