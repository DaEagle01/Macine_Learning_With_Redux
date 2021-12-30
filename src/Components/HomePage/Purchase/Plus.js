import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectUser } from "../../../features/user/userSlice";

const Plus = () => {
  const { register, handleSubmit, reset } = useForm();
  const user = useSelector(selectUser);
  console.log(user);

  const onSubmit = (data) => {
    data.plan = "plus";
    console.log(data);

    fetch("https://serene-harbor-07790.herokuapp.com/orders", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          console.log(data.acknowledged);
          reset();
          alert("Congrats, Product ordered successfully!");
        }
      });
  };
  return (
    <div className="flex gap-4 md:flex-row flex-col">
      <div className="flex flex-col items-center max-w-md p-4 mx-auto my-0 border border-solid rounded-lg  sm:my-0 sm:p-6 md:my-8 md:p-8">
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
      <div className="container py-20 w-4/ md:w-1/2 ">
        <div className=" add-service px-3 bg-gray-50">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-full  md:w-2/3"
          >
            {" "}
            <h2 className="text-center text-xl font-bold my-4 text-dark m-4 fw-bold">
              {" "}
              Your Information{" "}
            </h2>
            <input
              {...register("name")}
              placeholder="Your Full Name"
              className=" rounded-1 p-2 shadow-md "
            />
            <input
              {...register("email")}
              placeholder="Your Email"
              className=" rounded-1 p-2 shadow-md"
            />
            <input
              {...register("country")}
              placeholder="Country"
              className=" rounded-1 p-2 shadow-md"
            />
            <input
              type="number"
              {...register("zip")}
              placeholder="Zip Code"
              className=" rounded-1 p-2 shadow-md"
            />
            <input
              type="number"
              {...register("number")}
              placeholder="Your Phone Number"
              className=" rounded-1 p-2 shadow-md"
            />
            <input
              type="date"
              {...register("date")}
              placeholder="Price"
              className=" rounded-1 p-2 shadow-md"
            />
            <textarea
              {...register("others")}
              placeholder="Others Optional"
              className=" rounded-1 p-2 shadow-md"
            />
            <input
              className="bg-purple-500 text-white fw-bold  py-2 fs-5"
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Plus;
