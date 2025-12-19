import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";

import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { User_avatar } from "../utils/constants";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

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

    /* ================= SIGN UP ================= */
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          return updateProfile(user, {
            displayName: name.current.value,
            photoURL: User_avatar, // ✅ FIXED
          });
        })
        .then(() => {
          const { uid, email, displayName, photoURL } = auth.currentUser;

          dispatch(
            addUser({
              uid,
              email,
              displayName,
              photoURL,
            })
          );
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    }

    /* ================= SIGN IN ================= */
    else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      ).catch((error) => {
        setErrorMessage(error.message);
      });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null);
  };

  return (
    <div
      className="relative h-screen w-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://singh-cp.github.io/netflix-landingpage/images/netflix-background-image.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <Header />

      {/* FORM */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="relative z-10 absolute top-1/2 left-1/2 w-[350px]
                   -translate-x-1/2 -translate-y-1/2
                   bg-black bg-opacity-70 p-10 rounded-lg text-white"
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
          <p className="text-red-500 text-sm py-2">{errorMessage}</p>
        )}

        <button
          type="button"
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
