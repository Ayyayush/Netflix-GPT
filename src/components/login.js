import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { USER_AVATAR, BG_URL } from "../utils/constants";

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

    if (message) {
      setErrorMessage(message);
      return;
    }

    if (!isSignInForm) {
      // ================= SIGN UP =================
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) =>
          updateProfile(userCredential.user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
        )
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
        .catch((error) => setErrorMessage(error.message));
    } else {
      // ================= SIGN IN =================
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      ).catch((error) => setErrorMessage(error.message));
    }
  };

  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${BG_URL})` }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <Header />

      {/* ================= LOGIN CARD ================= */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="
          absolute left-1/2 top-1/2 z-10
          w-[90%] max-w-sm sm:max-w-md
          -translate-x-1/2 -translate-y-1/2
          bg-black/80 backdrop-blur-md
          p-6 sm:p-8
          rounded-xl
          text-white
          shadow-2xl
        "
      >
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {/* Name (only for signup) */}
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="
              p-3 sm:p-4 mb-3
              w-full rounded-md
              bg-gray-700
              outline-none
              focus:ring-2 focus:ring-red-600
            "
          />
        )}

        {/* Email */}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="
            p-3 sm:p-4 mb-3
            w-full rounded-md
            bg-gray-700
            outline-none
            focus:ring-2 focus:ring-red-600
          "
        />

        {/* Password */}
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="
            p-3 sm:p-4 mb-3
            w-full rounded-md
            bg-gray-700
            outline-none
            focus:ring-2 focus:ring-red-600
          "
        />

        {/* Error message */}
        {errorMessage && (
          <p className="text-red-500 text-sm mb-3">
            {errorMessage}
          </p>
        )}

        {/* Submit button */}
        <button
          type="button"
          onClick={handleButtonClick}
          className="
            w-full bg-red-600
            py-3 rounded-md
            font-semibold
            hover:bg-red-700
            transition
          "
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        {/* Toggle */}
        <p
          className="mt-5 text-sm cursor-pointer hover:underline text-gray-300"
          onClick={() => {
            setIsSignInForm(!isSignInForm);
            setErrorMessage(null);
          }}
        >
          {isSignInForm
            ? "New here? Sign Up Now"
            : "Already registered? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
