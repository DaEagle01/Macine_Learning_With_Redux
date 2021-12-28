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
        pagination={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div class="flex items-center justify-center px-5 py-5">
            <div class="w-full mx-auto max-w-xl rounded-lg bg-white dark:bg-gray-800 shadow-lg px-5 pt-5 pb-10 text-gray-800 dark:text-gray-50">
              <div class=" w-16 pt-1 text-center pb-5 -mt-16 mx-auto">
                <a href="#" class="block relative">
                  <img
                    alt="profil"
                    src="https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1640697434~hmac=b84af1b00291cc8d122e992c1e569493"
                    class="mx-auto object-cover rounded-full "
                  />
                </a>
              </div>
              <div class="w-full mb-10">
                <div class="text-3xl text-indigo-500 text-left leading-tight h-3">
                  “
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-100 text-center px-5">
                  To get social media testimonials like these, keep your
                  customers engaged with your social media accounts by posting
                  regularly yourself
                </p>
                <div class="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
                  ”
                </div>
              </div>
              <div class="w-full">
                <p class="text-md text-indigo-500 font-bold text-center">
                  Tom Hardy
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-300 text-center">
                  @thom.hardy
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="flex items-center justify-center px-5 py-5">
            <div class="w-full mx-auto max-w-xl rounded-lg bg-white dark:bg-gray-800 shadow-lg px-5 pt-5 pb-10 text-gray-800 dark:text-gray-50">
              <div class=" w-16 pt-1 text-center pb-5 -mt-16 mx-auto">
                <a href="#" class="block relative">
                  <img
                    alt="profil"
                    src="https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1640697434~hmac=b84af1b00291cc8d122e992c1e569493"
                    class="mx-auto object-cover rounded-full "
                  />
                </a>
              </div>
              <div class="w-full mb-10">
                <div class="text-3xl text-indigo-500 text-left leading-tight h-3">
                  “
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-100 text-center px-5">
                  To get social media testimonials like these, keep your
                  customers engaged with your social media accounts by posting
                  regularly yourself
                </p>
                <div class="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
                  ”
                </div>
              </div>
              <div class="w-full">
                <p class="text-md text-indigo-500 font-bold text-center">
                  Tom Hardy
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-300 text-center">
                  @thom.hardy
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="flex items-center justify-center px-5 py-5">
            <div class="w-full mx-auto max-w-xl rounded-lg bg-white dark:bg-gray-800 shadow-lg px-5 pt-5 pb-10 text-gray-800 dark:text-gray-50">
              <div class=" w-16 pt-1 text-center pb-5 -mt-16 mx-auto">
                <a href="#" class="block relative">
                  <img
                    alt="profil"
                    src="https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1640697434~hmac=b84af1b00291cc8d122e992c1e569493"
                    class="mx-auto object-cover rounded-full "
                  />
                </a>
              </div>
              <div class="w-full mb-10">
                <div class="text-3xl text-indigo-500 text-left leading-tight h-3">
                  “
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-100 text-center px-5">
                  To get social media testimonials like these, keep your
                  customers engaged with your social media accounts by posting
                  regularly yourself
                </p>
                <div class="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
                  ”
                </div>
              </div>
              <div class="w-full">
                <p class="text-md text-indigo-500 font-bold text-center">
                  Tom Hardy
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-300 text-center">
                  @thom.hardy
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="flex items-center justify-center px-5 py-5">
            <div class="w-full mx-auto max-w-xl rounded-lg bg-white dark:bg-gray-800 shadow-lg px-5 pt-5 pb-10 text-gray-800 dark:text-gray-50">
              <div class=" w-16 pt-1 text-center pb-5 -mt-16 mx-auto">
                <a href="#" class="block relative">
                  <img
                    alt="profil"
                    src="https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1640697434~hmac=b84af1b00291cc8d122e992c1e569493"
                    class="mx-auto object-cover rounded-full "
                  />
                </a>
              </div>
              <div class="w-full mb-10">
                <div class="text-3xl text-indigo-500 text-left leading-tight h-3">
                  “
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-100 text-center px-5">
                  To get social media testimonials like these, keep your
                  customers engaged with your social media accounts by posting
                  regularly yourself
                </p>
                <div class="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
                  ”
                </div>
              </div>
              <div class="w-full">
                <p class="text-md text-indigo-500 font-bold text-center">
                  Tom Hardy
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-300 text-center">
                  @thom.hardy
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="flex items-center justify-center px-5 py-5">
            <div class="w-full mx-auto max-w-xl rounded-lg bg-white dark:bg-gray-800 shadow-lg px-5 pt-5 pb-10 text-gray-800 dark:text-gray-50">
              <div class=" w-16 pt-1 text-center pb-5 -mt-16 mx-auto">
                <a href="#" class="block relative">
                  <img
                    alt="profil"
                    src="https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1640697434~hmac=b84af1b00291cc8d122e992c1e569493"
                    class="mx-auto object-cover rounded-full "
                  />
                </a>
              </div>
              <div class="w-full mb-10">
                <div class="text-3xl text-indigo-500 text-left leading-tight h-3">
                  “
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-100 text-center px-5">
                  To get social media testimonials like these, keep your
                  customers engaged with your social media accounts by posting
                  regularly yourself
                </p>
                <div class="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
                  ”
                </div>
              </div>
              <div class="w-full">
                <p class="text-md text-indigo-500 font-bold text-center">
                  Tom Hardy
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-300 text-center">
                  @thom.hardy
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="flex items-center justify-center px-5 py-5">
            <div class="w-full mx-auto max-w-xl rounded-lg bg-white dark:bg-gray-800 shadow-lg px-5 pt-5 pb-10 text-gray-800 dark:text-gray-50">
              <div class=" w-16 pt-1 text-center pb-5 -mt-16 mx-auto">
                <a href="#" class="block relative">
                  <img
                    alt="profil"
                    src="https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1640697434~hmac=b84af1b00291cc8d122e992c1e569493"
                    class="mx-auto object-cover rounded-full "
                  />
                </a>
              </div>
              <div class="w-full mb-10">
                <div class="text-3xl text-indigo-500 text-left leading-tight h-3">
                  “
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-100 text-center px-5">
                  To get social media testimonials like these, keep your
                  customers engaged with your social media accounts by posting
                  regularly yourself
                </p>
                <div class="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
                  ”
                </div>
              </div>
              <div class="w-full">
                <p class="text-md text-indigo-500 font-bold text-center">
                  Tom Hardy
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-300 text-center">
                  @thom.hardy
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="flex items-center justify-center px-5 py-5">
            <div class="w-full mx-auto max-w-xl rounded-lg bg-white dark:bg-gray-800 shadow-lg px-5 pt-5 pb-10 text-gray-800 dark:text-gray-50">
              <div class=" w-16 pt-1 text-center pb-5 -mt-16 mx-auto">
                <a href="#" class="block relative">
                  <img
                    alt="profil"
                    src="https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1640697434~hmac=b84af1b00291cc8d122e992c1e569493"
                    class="mx-auto object-cover rounded-full "
                  />
                </a>
              </div>
              <div class="w-full mb-10">
                <div class="text-3xl text-indigo-500 text-left leading-tight h-3">
                  “
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-100 text-center px-5">
                  To get social media testimonials like these, keep your
                  customers engaged with your social media accounts by posting
                  regularly yourself
                </p>
                <div class="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
                  ”
                </div>
              </div>
              <div class="w-full">
                <p class="text-md text-indigo-500 font-bold text-center">
                  Tom Hardy
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-300 text-center">
                  @thom.hardy
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="flex items-center justify-center px-5 py-5">
            <div class="w-full mx-auto max-w-xl rounded-lg bg-white dark:bg-gray-800 shadow-lg px-5 pt-5 pb-10 text-gray-800 dark:text-gray-50">
              <div class=" w-16 pt-1 text-center pb-5 -mt-16 mx-auto">
                <a href="#" class="block relative">
                  <img
                    alt="profil"
                    src="https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1640697434~hmac=b84af1b00291cc8d122e992c1e569493"
                    class="mx-auto object-cover rounded-full "
                  />
                </a>
              </div>
              <div class="w-full mb-10">
                <div class="text-3xl text-indigo-500 text-left leading-tight h-3">
                  “
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-100 text-center px-5">
                  To get social media testimonials like these, keep your
                  customers engaged with your social media accounts by posting
                  regularly yourself
                </p>
                <div class="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
                  ”
                </div>
              </div>
              <div class="w-full">
                <p class="text-md text-indigo-500 font-bold text-center">
                  Tom Hardy
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-300 text-center">
                  @thom.hardy
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="flex items-center justify-center px-5 py-5">
            <div class="w-full mx-auto max-w-xl rounded-lg bg-white dark:bg-gray-800 shadow-lg px-5 pt-5 pb-10 text-gray-800 dark:text-gray-50">
              <div class=" w-16 pt-1 text-center pb-5 -mt-16 mx-auto">
                <a href="#" class="block relative">
                  <img
                    alt="profil"
                    src="https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1640697434~hmac=b84af1b00291cc8d122e992c1e569493"
                    class="mx-auto object-cover rounded-full "
                  />
                </a>
              </div>
              <div class="w-full mb-10">
                <div class="text-3xl text-indigo-500 text-left leading-tight h-3">
                  “
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-100 text-center px-5">
                  To get social media testimonials like these, keep your
                  customers engaged with your social media accounts by posting
                  regularly yourself
                </p>
                <div class="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
                  ”
                </div>
              </div>
              <div class="w-full">
                <p class="text-md text-indigo-500 font-bold text-center">
                  Tom Hardy
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-300 text-center">
                  @thom.hardy
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
