import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div className="relative h-screen w-screen bg-black">
      
      {/* Background Image */}
      <img
        src="https://singh-cp.github.io/netflix-landingpage/images/netflix-background-image.jpg"
        alt="banner"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
      />

      {/* DARK OVERLAY */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

      {/* Header */}
      <Header />

      {/* Login Form */}
      <form className="absolute top-1/2 left-1/2 w-[350px] -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-80 p-10 rounded-lg text-white">
        <h1 className="text-3xl font-semibold mb-5">Sign In</h1>

        <input
          type="text"
          placeholder="Email or phone number"
          className="p-3 w-full mb-4 rounded bg-gray-700"
        />

        <input
          type="password"
          placeholder="Password"
          className="p-3 w-full mb-6 rounded bg-gray-700"
        />

        <button className="w-full bg-red-600 p-3 rounded font-semibold hover:bg-red-700 duration-300">
          Sign In
        </button>

        <div className="flex justify-between text-sm text-gray-400 mt-3">
          <label>
            <input type="checkbox" className="mr-2" />
            Remember me
          </label>
          <a href="/">Need help?</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
