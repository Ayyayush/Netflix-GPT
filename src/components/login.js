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
      // SIGN UP
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
      // SIGN IN
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      ).catch((error) => setErrorMessage(error.message));
    }
  };

  return (
    <div
      className="relative h-screen w-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${BG_URL})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <Header />

      {/* Login Form */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute top-1/2 left-1/2 z-10 w-[350px]
                   -translate-x-1/2 -translate-y-1/2
                   bg-black/75 p-10 rounded-lg text-white"
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
          className="w-full bg-red-700 p-3 rounded font-semibold hover:bg-red-600"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p
          className="py-4 text-sm cursor-pointer hover:underline"
          onClick={() => setIsSignInForm(!isSignInForm)}
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
