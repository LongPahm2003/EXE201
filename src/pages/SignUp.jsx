import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex min-h-screen">
      {/* Left side - Image */}
      <div className="w-1/2">
        <img
          src="/src/assets/images/login.jpg"
          className="w-full h-screen object-cover"
          alt="Login"
        />
      </div>

      {/* Right side - Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16">
        <div className="max-w-md w-full mx-auto">
          <h1 className="text-2xl font-semibold mb-2 ml-[100px]">
            Welcome to DevKid
          </h1>
          <div className="flex rounded-full bg-red-500/20 p-1 mb-8">
            <Link
              to="/signin"
              className="flex-1 py-2 rounded-full text-redbg-red-500 text-center"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="flex-1 py-2 rounded-full bg-red-500 text-white text-center"
            >
              Register
            </Link>
          </div>

          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-redbg-red-500"
                placeholder="Enter your Email Address"
              />
            </div>

            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                User name
              </label>
              <input
                type="text"
                id="username"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-redbg-red-500"
                placeholder="Enter your User name"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-redbg-red-500"
                placeholder="Enter your Password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 px-4 rounded-full hover:bg-black transition duration-200"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
