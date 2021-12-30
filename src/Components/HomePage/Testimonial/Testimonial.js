import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Testimonial.css";

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

const Testimonial = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl font-bold text-purple-600 md:justify-start mb-8">
          Let Our Clients Do the Talking
        </h1>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        className="mySwiper mb-8"
      >
        <SwiperSlide>
          <div className="flex items-center justify-center px-5 py-5">
            <div className="w-full mx-auto max-w-xl rounded-lg bg-white dark:bg-gray-800 shadow-lg px-5 pt-5 pb-10 text-gray-800 dark:text-gray-50">
              <div className=" w-16 pt-1 text-center pb-5 -mt-16 mx-auto">
                <a href="#nothing" className="block relative">
                  <img
                    alt="profil"
                    src="https://indatalabs.com/wp-content/uploads/2021/10/main-pavel-nurminskiy.jpeg"
                    className="mx-auto object-cover rounded-full "
                  />
                </a>
              </div>
              <div className="w-full mb-10">
                <div className="text-3xl text-indigo-500 text-left leading-tight h-3">
                  “
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-100 text-center px-5">
                  Their competence in data science, machine learning is second
                  to none. The algorithms and methods were extremely
                  well-explained and documented.
                </p>
                <div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
                  ”
                </div>
              </div>
              <div className="w-full">
                <p className="text-md text-indigo-500 font-bold text-center">
                  John Simpson
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-300 text-center">
                  @simp.son
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center px-5 py-5">
            <div className="w-full mx-auto max-w-xl rounded-lg bg-white dark:bg-gray-800 shadow-lg px-5 pt-5 pb-10 text-gray-800 dark:text-gray-50">
              <div className=" w-16 pt-1 text-center pb-5 -mt-16 mx-auto">
                <a href="#nothing" className="block relative">
                  <img
                    alt="profil"
                    src="https://indatalabs.com/wp-content/uploads/2021/10/main-pavel-nurminskiy.jpeg"
                    className="mx-auto object-cover rounded-full "
                  />
                </a>
              </div>
              <div className="w-full mb-10">
                <div className="text-3xl text-indigo-500 text-left leading-tight h-3">
                  “
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-100 text-center px-5">
                  To get social media testimonials like these, keep your
                  customers engaged with your social media accounts by posting
                  regularly yourself
                </p>
                <div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
                  ”
                </div>
              </div>
              <div className="w-full">
                <p className="text-md text-indigo-500 font-bold text-center">
                  John Simpson
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-300 text-center">
                  @simp.son
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center px-5 py-5">
            <div className="w-full mx-auto max-w-xl rounded-lg bg-white dark:bg-gray-800 shadow-lg px-5 pt-5 pb-10 text-gray-800 dark:text-gray-50">
              <div className=" w-16 pt-1 text-center pb-5 -mt-16 mx-auto">
                <a href="#nothing" className="block relative">
                  <img
                    alt="profil"
                    src="https://indatalabs.com/wp-content/uploads/2021/10/main-pavel-nurminskiy.jpeg"
                    className="mx-auto object-cover rounded-full "
                  />
                </a>
              </div>
              <div className="w-full mb-10">
                <div className="text-3xl text-indigo-500 text-left leading-tight h-3">
                  “
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-100 text-center px-5">
                  Their competence in data science, machine learning is second
                  to none. The algorithms and methods were extremely
                  well-explained and documented.
                </p>
                <div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
                  ”
                </div>
              </div>
              <div className="w-full">
                <p className="text-md text-indigo-500 font-bold text-center">
                  John Simpson
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-300 text-center">
                  @simp.son
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center px-5 py-5">
            <div className="w-full mx-auto max-w-xl rounded-lg bg-white dark:bg-gray-800 shadow-lg px-5 pt-5 pb-10 text-gray-800 dark:text-gray-50">
              <div className=" w-16 pt-1 text-center pb-5 -mt-16 mx-auto">
                <a href="#nothing" className="block relative">
                  <img
                    alt="profil"
                    src="https://indatalabs.com/wp-content/uploads/2021/10/main-pavel-nurminskiy.jpeg"
                    className="mx-auto object-cover rounded-full "
                  />
                </a>
              </div>
              <div className="w-full mb-10">
                <div className="text-3xl text-indigo-500 text-left leading-tight h-3">
                  “
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-100 text-center px-5">
                  Their competence in data science, machine learning is second
                  to none. The algorithms and methods were extremely
                  well-explained and documented.
                </p>
                <div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
                  ”
                </div>
              </div>
              <div className="w-full">
                <p className="text-md text-indigo-500 font-bold text-center">
                  John Simpson
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-300 text-center">
                  @simp.son
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center px-5 py-5">
            <div className="w-full mx-auto max-w-xl rounded-lg bg-white dark:bg-gray-800 shadow-lg px-5 pt-5 pb-10 text-gray-800 dark:text-gray-50">
              <div className=" w-16 pt-1 text-center pb-5 -mt-16 mx-auto">
                <a href="#nothing" className="block relative">
                  <img
                    alt="profil"
                    src="https://indatalabs.com/wp-content/uploads/2021/10/main-pavel-nurminskiy.jpeg"
                    className="mx-auto object-cover rounded-full "
                  />
                </a>
              </div>
              <div className="w-full mb-10">
                <div className="text-3xl text-indigo-500 text-left leading-tight h-3">
                  “
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-100 text-center px-5">
                  Their competence in data science, machine learning is second
                  to none. The algorithms and methods were extremely
                  well-explained and documented.
                </p>
                <div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
                  ”
                </div>
              </div>
              <div className="w-full">
                <p className="text-md text-indigo-500 font-bold text-center">
                  John Simpson
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-300 text-center">
                  @simp.son
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center px-5 py-5">
            <div className="w-full mx-auto max-w-xl rounded-lg bg-white dark:bg-gray-800 shadow-lg px-5 pt-5 pb-10 text-gray-800 dark:text-gray-50">
              <div className=" w-16 pt-1 text-center pb-5 -mt-16 mx-auto">
                <a href="#nothing" className="block relative">
                  <img
                    alt="profil"
                    src="https://indatalabs.com/wp-content/uploads/2021/10/main-pavel-nurminskiy.jpeg"
                    className="mx-auto object-cover rounded-full "
                  />
                </a>
              </div>
              <div className="w-full mb-10">
                <div className="text-3xl text-indigo-500 text-left leading-tight h-3">
                  “
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-100 text-center px-5">
                  Their competence in data science, machine learning is second
                  to none. The algorithms and methods were extremely
                  well-explained and documented.
                </p>
                <div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
                  ”
                </div>
              </div>
              <div className="w-full">
                <p className="text-md text-indigo-500 font-bold text-center">
                  John Simpson
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-300 text-center">
                  @simp.son
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center px-5 py-5">
            <div className="w-full mx-auto max-w-xl rounded-lg bg-white dark:bg-gray-800 shadow-lg px-5 pt-5 pb-10 text-gray-800 dark:text-gray-50">
              <div className=" w-16 pt-1 text-center pb-5 -mt-16 mx-auto">
                <a href="#nothing" className="block relative">
                  <img
                    alt="profil"
                    src="https://indatalabs.com/wp-content/uploads/2021/10/main-pavel-nurminskiy.jpeg"
                    className="mx-auto object-cover rounded-full "
                  />
                </a>
              </div>
              <div className="w-full mb-10">
                <div className="text-3xl text-indigo-500 text-left leading-tight h-3">
                  “
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-100 text-center px-5">
                  Their competence in data science, machine learning is second
                  to none. The algorithms and methods were extremely
                  well-explained and documented.
                </p>
                <div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
                  ”
                </div>
              </div>
              <div className="w-full">
                <p className="text-md text-indigo-500 font-bold text-center">
                  John Simpson
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-300 text-center">
                  @simp.son
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center px-5 py-5">
            <div className="w-full mx-auto max-w-xl rounded-lg bg-white dark:bg-gray-800 shadow-lg px-5 pt-5 pb-10 text-gray-800 dark:text-gray-50">
              <div className=" w-16 pt-1 text-center pb-5 -mt-16 mx-auto">
                <a href="#nothing" className="block relative">
                  <img
                    alt="profil"
                    src="https://indatalabs.com/wp-content/uploads/2021/10/main-pavel-nurminskiy.jpeg"
                    className="mx-auto object-cover rounded-full "
                  />
                </a>
              </div>
              <div className="w-full mb-10">
                <div className="text-3xl text-indigo-500 text-left leading-tight h-3">
                  “
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-100 text-center px-5">
                  Their competence in data science, machine learning is second
                  to none. The algorithms and methods were extremely
                  well-explained and documented.
                </p>
                <div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
                  ”
                </div>
              </div>
              <div className="w-full">
                <p className="text-md text-indigo-500 font-bold text-center">
                  John Simpson
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-300 text-center">
                  @simp.son
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center px-5 py-5">
            <div className="w-full mx-auto max-w-xl rounded-lg bg-white dark:bg-gray-800 shadow-lg px-5 pt-5 pb-10 text-gray-800 dark:text-gray-50">
              <div className=" w-16 pt-1 text-center pb-5 -mt-16 mx-auto">
                <a href="#nothing" className="block relative">
                  <img
                    alt="profil"
                    src="https://indatalabs.com/wp-content/uploads/2021/10/main-pavel-nurminskiy.jpeg"
                    className="mx-auto object-cover rounded-full "
                  />
                </a>
              </div>
              <div className="w-full mb-10">
                <div className="text-3xl text-indigo-500 text-left leading-tight h-3">
                  “
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-100 text-center px-5">
                  Their competence in data science, machine learning is second
                  to none. The algorithms and methods were extremely
                  well-explained and documented.
                </p>
                <div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
                  ”
                </div>
              </div>
              <div className="w-full">
                <p className="text-md text-indigo-500 font-bold text-center">
                  John Simpson
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-300 text-center">
                  @simp.son
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default Testimonial;
