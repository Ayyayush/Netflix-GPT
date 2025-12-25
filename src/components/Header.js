import React, { useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGO } from "../utils/constants";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth).then(() => navigate("/"));
  };

  const handleGPTSearchClick = () => {
    dispatch(toggleGptSearchView());   // ✅ FIXED
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
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between px-6 md:px-10 py-3 bg-gradient-to-b from-black/90 via-black/60 to-transparent">

        {/* Logo */}
        <img
          className="w-28 md:w-36 cursor-pointer"
          src={LOGO}
          alt="Netflix Logo"
        />

        {user && (
          <div className="flex items-center gap-4">

            {/* GPT Search Button */}
            <button
              onClick={handleGPTSearchClick}
              className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all
                ${
                  showGptSearch
                    ? "bg-red-600 text-white"
                    : "bg-purple-800 text-white hover:bg-purple-700"
                }
              `}
            >
              {showGptSearch ? "Home" : "GPT Search"}
            </button>

            {/* Avatar */}
            <img
              className="w-8 h-8 rounded object-cover"
              src={user.photoURL}
              alt="User"
            />

            {/* Sign Out */}
            <button
              onClick={handleSignOut}
              className="text-sm text-gray-300 hover:text-white"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
