import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth).then(() => navigate("/"));
  };

  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-50 flex justify-between items-center">
      <img
        className="w-40"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
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
