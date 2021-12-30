import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Solution = () => {
  const { _id } = useParams();
  const [solution, setSoluiton] = useState([]);
  useEffect(() => {
    fetch(`https://serene-harbor-07790.herokuapp.com/solutions/${_id}`)
      .then((res) => res.json())
      .then((data) => setSoluiton(data));
  });

  return (
    <div>
      <div className="mb-5 bg-purple-400">
        <div className=" text-3xl text-left text-white py-20 ml-20 ">
          <h1 className="font-bold">{solution.title}</h1>
          <h3 className="font-bold">
            Home &#62; <span className="text-warning"> {solution.title} </span>{" "}
          </h3>
        </div>
      </div>
      <section className="w-full bg-white pt-7 pb-7 md:pt-20 md:pb-24">
        <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">
          <div className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
            <img
              src={solution.img1}
              className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 "
              alt=""
            />
          </div>

          <div className="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
            <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
              Improve customer experience
            </h2>
            <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
              Comprise all your business requirements into a custom computer
              vision solution within budget.
            </p>
            <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-purple-300 rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Better understand your brand perception
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-purple-300 rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Predict churn and prevent cost overruns
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-purple-300 rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Eliminate errors and enhance accuracy
              </li>
            </ul>
          </div>
        </div>

        <div className="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">
          <div className="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
            <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
              Automated Tasks
            </h2>
            <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">
              Talk through your custom solution with our data science company
              that will address your challenges and save you time.
            </p>
            <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-purple-300 rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Automated task management workflow
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-purple-300 rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Detailed analytics for your data
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-purple-300 rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Natural Language Processing
              </li>
            </ul>
          </div>

          <div className="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
            <img
              src={solution.img2}
              className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 "
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solution;
