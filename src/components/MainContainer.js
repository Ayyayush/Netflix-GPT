import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies || movies.length === 0) return null;

  const mainMovie = movies[0];

  return (
    <div className="relative w-screen h-[85vh] sm:h-screen overflow-hidden">
      {/* Video */}
      <VideoBackground movieId={mainMovie.id} />

      {/* Title Overlay */}
      <VideoTitle
        title={mainMovie.title}
        overview={mainMovie.overview}
      />

      {/* Bottom Netflix fade */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
};

export default MainContainer;
