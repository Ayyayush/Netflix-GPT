import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const {
    nowPlayingMovies,
    trendingMovies,
    popularMovies,
    upcomingMovies,
    topRatedMovies,
    horrorMovies,
  } = useSelector((store) => store.movies);

  return (
    <div
      className="
        relative z-20
        -mt-20 sm:-mt-28 md:-mt-36
        bg-[#141414]
      "
    >
      {/* Netflix fade from hero */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-black/80 via-black/40 to-[#141414]
          pointer-events-none
        "
      />

      {/* Rows */}
      <div className="relative space-y-10 sm:space-y-12 px-4 sm:px-6 md:px-12 lg:px-16 pb-24">
        <MovieList title="Now Playing" movies={nowPlayingMovies} />
        <MovieList title="Trending Now" movies={trendingMovies} />
        <MovieList title="Popular on Netflix" movies={popularMovies} />
        <MovieList title="Upcoming" movies={upcomingMovies} />
        <MovieList title="Top Rated" movies={topRatedMovies} />
        <MovieList title="Horror Movies" movies={horrorMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
