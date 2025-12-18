import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

// Firebase imports
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  // State to toggle between Sign In and Sign Up
  const [isSignInForm, setIsSignInForm] = useState(true);

  // State to store validation / firebase errors
  const [errorMessage, setErrorMessage] = useState(null);

  // Input refs (useRef avoids re-renders on every keystroke)
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  // Handles Sign In / Sign Up button click
  const handleButtonClick = () => {
    // Validate form data
    const message = checkValidData(
      isSignInForm ? null : name.current?.value, // name required only for Sign Up
      email.current.value,
      password.current.value
    );

    // Set validation error if any
    setErrorMessage(message);

    // Stop execution if validation fails
    if (message) return;

    // ---------------- SIGN UP ----------------
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("User signed up:", user);
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    }

    // ---------------- SIGN IN ----------------
    else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("User signed in:", user);
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    }
  };

  // Toggle between Sign In and Sign Up forms
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null); // clear error on toggle
  };

  return (
    <div className="relative h-screen w-screen bg-black">
      {/* Background Image */}
      <img
        src="https://singh-cp.github.io/netflix-landingpage/images/netflix-background-image.jpg"
        alt="banner"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

      <Header />

      {/* AUTH FORM */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute top-1/2 left-1/2 w-[350px]
                   -translate-x-1/2 -translate-y-1/2
                   bg-black bg-opacity-60 p-10 rounded-lg text-white"
      >
        <h1 className="text-3xl font-bold mb-5">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {/* NAME FIELD (only for Sign Up) */}
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-3 w-full rounded bg-gray-700"
          />
        )}

        {/* EMAIL */}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-4 my-3 w-full rounded bg-gray-700"
        />

        {/* PASSWORD */}
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-3 w-full rounded bg-gray-700"
        />

        {/* ERROR MESSAGE */}
        {errorMessage && (
          <p className="text-red-500 font-semibold text-sm py-2">
            {errorMessage}
          </p>
        )}

        {/* SUBMIT BUTTON */}
        <button
          onClick={handleButtonClick}
          className="w-full bg-red-700 p-3 rounded
                     font-semibold hover:bg-red-600 transition"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        {/* TOGGLE SIGN IN / SIGN UP */}
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
