import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import robotic from "../../../images/robot.png";
// import cognitive from "../../../images/cognitive.png";
// import disability from "../../../images/disability.png";
// import security from "../../../images/camera.png";
// import humanBehavior from "../../../images/consumer-behaviour.png";
// import autoTag from "../../../images/label.png";

const Solutions = () => {
  const [solutions, setSolutions] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/solutions")
      .then((res) => res.json())
      .then((data) => setSolutions(data));
  }, []);
  return (
    <div>
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight text-center">
            Solutions We Offer
          </h2>
          <p className="mt-2 text-lg text-center text-gray-600">
            Check out our list of awesome features below.
          </p>

          <div className="md:px-1 md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 space-y-4 md:space-y-0 container">
            {solutions.map((solution) => {
              return (
                <div
                  key={solution._id}
                  className=" bg-white px-4 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500"
                >
                  <div className="relative flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 sm:rounded-xl">
                    <div className="p-3 text-white  rounded-full">
                      <img
                        className="img-fluid h-24 w-24"
                        src={solution.logo}
                        alt=""
                      />
                    </div>
                    <h4 className="text-xl font-medium text-gray-700">
                      {solution.title}
                    </h4>
                    <p className="text-base text-center text-gray-500">
                      {solution.shortDescription}
                    </p>
                    <Link
                      to={`/${solution._id}`}
                      className="text-indigo-500 inline-flex items-center"
                    >
                      Discover More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
