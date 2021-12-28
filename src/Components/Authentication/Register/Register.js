import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const isLoading = 0;
  return (
    <div>
      <div>
        <div class="grid min-h-screen place-items-center">
          <div class="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
            <div class="text-xl text-center font-semibold">
              Hello there 👋, <p class="font-normal">Create an account</p>
            </div>
            {!isLoading && (
              <form
                class="mt-6"
                //   onSubmit={handleRegister}
              >
                <span class="w-1/2">
                  <label
                    for="Fullname"
                    class="block text-xs font-semibold text-gray-600 uppercase"
                  >
                    Fullname
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    // onBlur={handleRegisterInfo}
                    placeholder="Abd Ullah"
                    autocomplete="given-name"
                    class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                    required
                  />
                </span>

                <label
                  for="email"
                  class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
                >
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  //   onBlur={handleRegisterInfo}
                  placeholder="john.doe@company.com"
                  autocomplete="email"
                  class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  required
                />
                <label
                  for="password"
                  class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  //   onBlur={handleRegisterInfo}
                  placeholder="********"
                  autocomplete="new-password"
                  class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  required
                />
                <label
                  for="password-confirm"
                  class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
                >
                  Confirm password
                </label>
                <input
                  id="password-confirm"
                  type="password"
                  name="password2"
                  //   onBlur={handleRegisterInfo}
                  placeholder="********"
                  autocomplete="new-password"
                  class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  required
                />
                <button
                  type="submit"
                  class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-purple-600 shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
                >
                  Sign up
                </button>
                <p class=" inline-block mt-4 text-xs text-gray-500 cursor-pointer hover:text-black">
                  Already registered?{" "}
                  <Link
                    to="/login"
                    style={{ textDecoration: "none" }}
                    class="text-blue-500 hover:text-blue-700 font-semibold"
                  >
                    Login here
                  </Link>
                </p>
              </form>
            )}
            {/* {isLoading && (
              <button type="button" class="bg-rose-600 ..." disabled>
                <svg
                  class="animate-spin h-5 w-5 mr-3 ..."
                  viewBox="0 0 24 24"
                ></svg>
                Processing
              </button>
            )} */}
            {/* {user?.email && (
              <Alert severity="success">User Created successfully!</Alert>
            )}
            {error && <Alert severity="error">{error}</Alert>} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
