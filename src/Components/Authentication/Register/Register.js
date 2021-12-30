import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login, logout, selectUser } from "../../../features/user/userSlice";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const Register = () => {
  const user = useSelector(selectUser);
  // console.log(user);
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const auth = getAuth();

  const handleRegisterInfo = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newdata = { ...data };
    newdata[field] = value;
    setData(newdata);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (data.password !== data.password2) {
      alert("Your password did not match");
      return;
    }
    registerUser(data.email, data.password, data.name);
  };

  const registerUser = (email, password) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          login({
            id: user.uid,
            email: user.email,
            name: user.displayName ? user.displayName : user.email,
            lastSignIn: user.metadata.lastSignInTime,
            verified: String(user.emailVerified),
            pic: user.photoURL
              ? user.photoURL
              : "https://lh3.googleusercontent.com/ogw/ADea4I71HaTv1-oVFwsyPGAduuVaWxeQ9BVPIoiX4mxH=s32-c-mo",
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return () => unsubscribed;
  }, [dispatch, auth, user]);

  return (
    <div>
      <div className="grid min-h-screen place-items-center">
        <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
          <div className="text-xl text-center font-semibold">
            Hello there 👋, <p className="font-normal">Create an account</p>
          </div>

          <form className="mt-6" onSubmit={handleRegister}>
            <span className="w-1/2">
              <label
                for="Fullname"
                className="block text-xs font-semibold text-gray-600 uppercase"
              >
                Fullname
              </label>
              <input
                id="name"
                type="text"
                name="name"
                onChange={handleRegisterInfo}
                placeholder="Abd Ullah"
                autocomplete="given-name"
                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
              />
            </span>

            <label
              for="email"
              className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >
              E-mail
            </label>
            <input
              id="email"
              type="email"
              name="email"
              onChange={handleRegisterInfo}
              placeholder="john.doe@company.com"
              autocomplete="email"
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              required
            />
            <label
              for="password"
              className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              onChange={handleRegisterInfo}
              placeholder="********"
              autocomplete="new-password"
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              required
            />
            <label
              for="password-confirm"
              className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >
              Confirm password
            </label>
            <input
              id="password-confirm"
              type="password"
              name="password2"
              onChange={handleRegisterInfo}
              placeholder="********"
              autocomplete="new-password"
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              required
            />
            <button
              type="submit"
              className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-purple-600 shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
            >
              Sign up
            </button>
            <p className=" inline-block mt-4 text-xs text-gray-500 cursor-pointer hover:text-black">
              Already registered?{" "}
              <Link
                to="/login"
                style={{ textDecoration: "none" }}
                className="text-blue-500 hover:text-blue-700 font-semibold"
              >
                Login here
              </Link>
            </p>
          </form>

          {isLoading && (
            <button type="button" className="bg-rose-600 ..." disabled>
              <svg
                className="animate-spin h-5 w-5 mr-3 ..."
                viewBox="0 0 24 24"
              ></svg>
              Processing
            </button>
          )}

          {user?.email && (
            <alert severity="success">User Created successfully!</alert>
          )}
          {error && <alert severity="error">{error}</alert>}
        </div>
      </div>
    </div>
  );
};

export default Register;
