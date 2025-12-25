import React, { useEffect, useState, useRef } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const language = useSelector((store) => store.config.lang);

  const [showMenu, setShowMenu] = useState(false);

  const handleSignOut = () => {
    signOut(auth).then(() => navigate("/"));
  };

  const handleGPTSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Firebase auth listener
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
      <div className="flex items-center justify-between px-6 md:px-12 py-4
                      bg-gradient-to-b from-black/90 via-black/70 to-transparent
                      backdrop-blur-md">

        {/* Logo */}
        <img src={LOGO} alt="Netflix" className="w-28 md:w-36 cursor-pointer" />

        {user && (
          <div className="flex items-center gap-6">

            {/* GPT Button */}
            <button
              onClick={handleGPTSearchClick}
              className={`px-5 py-1.5 text-sm font-semibold rounded-full
                transition-all
                ${
                  showGptSearch
                    ? "bg-red-600 text-white"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
            >
              {showGptSearch ? "Home" : "GPT Search"}
            </button>

            {/* Avatar + Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <div
                onClick={() => setShowMenu((prev) => !prev)}
                className="flex items-center gap-1 cursor-pointer"
              >
                <img
                  src={user.photoURL}
                  alt="User"
                  className="w-9 h-9 rounded-md object-cover border border-white/20"
                />
                <svg
                  className={`w-4 h-4 text-white transition-transform ${
                    showMenu ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              {showMenu && (
                <div
                  className="absolute right-0 mt-3 w-52
                             rounded-xl overflow-hidden
                             bg-gradient-to-b from-zinc-900/90 to-black/95
                             backdrop-blur-xl
                             shadow-2xl border border-white/10"
                >
                  {/* Language Selector – ONLY in GPT mode */}
                  {showGptSearch && (
                    <div className="px-4 py-3 border-b border-white/10">
                      <p className="text-xs text-gray-400 mb-1">Language</p>
                      <select
                        value={language}
                        onChange={handleLanguageChange}
                        className="w-full bg-zinc-900 text-white text-sm
                                   px-3 py-2 rounded-md
                                   border border-white/20
                                   focus:outline-none focus:ring-2
                                   focus:ring-red-600"
                      >
                        {SUPPORTED_LANGUAGES.map((lang) => (
                          <option key={lang.identifier} value={lang.identifier}>
                            {lang.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  {/* Sign Out */}
                  <button
                    onClick={handleSignOut}
                    className="w-full px-4 py-3 text-sm text-left
                               text-gray-200 hover:bg-red-600
                               transition-all"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
