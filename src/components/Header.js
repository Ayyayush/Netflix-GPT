import React, { useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGO } from "../utils/constants";

import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/");
    });
  };



  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          addUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-50 flex justify-between items-center">
      <img
        className="w-40"
        src={LOGO}
        alt="logo"
      />

      {user && (
        <div className="flex items-center gap-3">
          <img
            className="w-9 h-9 rounded-full object-cover"
            src={user.photoURL}
            alt="user"
          />
          <button
            onClick={handleSignOut}
            className="text-sm text-gray-300 hover:text-white"
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
