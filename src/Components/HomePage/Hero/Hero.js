import React from "react";
import heroImg from "../../../images/machine1-removebg-preview.png";
import machineBg from "../../../images/freeMachine.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-purple-100">
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Big on Machine Learning &
              <br class="hidden lg:inline-block" />
              Artificial Intelligence
            </h1>
            <p class="mb-8 leading-relaxed">
              Being a leading data science company, we help our clients extract
              valuable business insights from their data to better understand
              their audience, forecast demand, reduce risks, prevent cost
              overruns, and much more.
            </p>
            <div class="flex justify-center">
              <Link
                to="/solutions"
                class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Solutions
              </Link>
              <Link
                to="/solutions"
                class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
              >
                Solutions
              </Link>
            </div>
          </div>
          <div
            class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 img-fluid"
            style={
              {
                //   backgroundImage: `url(${machineBg})`,
                //   backgroundRepeat: "no-repeat",
                //   height: "400px",
                //   width: "400px",
              }
            }
          >
            <img
              class="object-cover object-center rounded img-fluid"
              alt="hero"
              src={machineBg}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
