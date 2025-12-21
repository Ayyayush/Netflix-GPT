import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

// Movie fetching hooks
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import usePopularMovies from "../hooks/usePopularMovies";

const Browse = () => {
  // 🔥 Fetch all movie categories (runs once each)
  useNowPlayingMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  usePopularMovies();

  return (
    <div className="bg-black min-h-screen">
      {/* Header */}
      <Header />

      {/* Content below fixed header */}
      <div className="pt-[72px]">
        <MainContainer />
        <SecondaryContainer />
      </div>
    </div>
  );
};

export default Browse;
