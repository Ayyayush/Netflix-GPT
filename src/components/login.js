import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

// Firebase imports
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  // Toggle between Sign In / Sign Up
  const [isSignInForm, setIsSignInForm] = useState(true);

  // Store validation / firebase errors
  const [errorMessage, setErrorMessage] = useState(null);

  // Navigation hook (valid here because Login is a route)
  const navigate = useNavigate();

  // Input refs
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(
      isSignInForm ? null : name.current?.value,
      email.current.value,
      password.current.value
    );

    setErrorMessage(message);
    if (message) return;

    // -------- SIGN UP --------
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then(() => {
          navigate("/browse"); // ✅ redirect ONLY here
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    }

    // -------- SIGN IN --------
    else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then(() => {
          navigate("/browse"); // ✅ redirect ONLY here
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null);
  };

  return (
    <div className="relative h-screen w-screen bg-black">
      {/* Background */}
      <img
        src="https://singh-cp.github.io/netflix-landingpage/images/netflix-background-image.jpg"
        alt="banner"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

      <Header />

      {/* FORM */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute top-1/2 left-1/2 w-[350px]
                   -translate-x-1/2 -translate-y-1/2
                   bg-black bg-opacity-60 p-10 rounded-lg text-white"
      >
        <h1 className="text-3xl font-bold mb-5">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-3 w-full rounded bg-gray-700"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-4 my-3 w-full rounded bg-gray-700"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-3 w-full rounded bg-gray-700"
        />

        {errorMessage && (
          <p className="text-red-500 font-semibold text-sm py-2">
            {errorMessage}
          </p>
        )}

        <button
          onClick={handleButtonClick}
          className="w-full bg-red-700 p-3 rounded
                     font-semibold hover:bg-red-600 transition"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p
          className="py-4 cursor-pointer hover:underline text-sm"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New here? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
