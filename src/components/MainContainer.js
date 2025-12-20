import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );

  // Guard condition
  if (!movies || movies.length === 0) return null;

  const mainMovie = movies[0];

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <VideoTitle
        title={mainMovie.title}
        overview={mainMovie.overview}
      />
      <VideoBackground movieId={mainMovie.id} />
    </div>
  );
};

export default MainContainer;
