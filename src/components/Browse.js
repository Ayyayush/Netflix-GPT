import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GPTSearch from "./GPTSearch";

import { useSelector } from "react-redux";

// Movie fetching hooks
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import usePopularMovies from "../hooks/usePopularMovies";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  // Fetch movies only once
  useNowPlayingMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  usePopularMovies();

  return (
    <div className="bg-black min-h-screen">
      {/* Header */}
      <Header />

      {/* Content */}
      <div className="pt-[72px]">
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
