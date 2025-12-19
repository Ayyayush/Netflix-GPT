import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  // Custom hook handles fetching & dispatching
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>

      {/* Movie sections will be added here
      MainContainer
       - VideoContainer
       - VideoTitle
      Secondary Container
        - Movie List * n 
        - Cards * n
        - 
        - 



       */}
    </div>
  );
};

export default Browse;
