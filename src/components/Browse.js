import React from "react";
import { useSelector } from "react-redux";

import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GPTSearch from "./GPTSearch";

// Movie fetching hooks
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import usePopularMovies from "../hooks/usePopularMovies";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  // 🔥 Fetch movies (runs once via hooks)
  useNowPlayingMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  usePopularMovies();

  return (
    <div className="bg-black min-h-screen w-full overflow-x-hidden">
      {/* ================= HEADER ================= */}
      <Header />

      {/* ================= MAIN CONTENT =================
         pt adjusted responsively so content never hides
         behind fixed header on mobile
      */}
      <div className="pt-[64px] sm:pt-[72px] md:pt-[80px]">
        {showGptSearch ? (
          <GPTSearch />
        ) : (
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        )}
      </div>
    </div>
  );
};

export default Browse;
