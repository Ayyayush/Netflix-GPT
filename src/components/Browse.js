import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  // Fetch & store now playing movies in redux
  useNowPlayingMovies();

  return (
    <div className="bg-black min-h-screen">
      {/* Header stays on top */}
      <Header />

      {/* Push content below fixed header */}
      <div className="pt-[72px]">
        <MainContainer />
        <SecondaryContainer />
      </div>
    </div>
  );
};

export default Browse;
