import React from "react";
import { Link } from "react-router-dom";
import about from "../../../images/services-img1-2-1-1.png";

const About = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={about}
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Our Mission Is to Bring
              <br class="hidden lg:inline-block" />
              the Power of AI to Every Business
            </h1>
            <p class="mb-8 leading-relaxed">
              We are a data science and analytics consulting firm delivering
              AI-powered software and technical solutions to companies who want
              to leverage data and machine learning algorithms to add value to
              their businesses. As an artificial intelligence company, we’re
              focused on machine learning, AI software development, computer
              vision, and intelligent automation. We help businesses innovate
              with AI, enrich customer insights, automate processes and be more
              cost-efficient.
            </p>
            <div class="flex justify-center">
              <Link to='/solutions' class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
               Solutions 
              </Link>
             
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
