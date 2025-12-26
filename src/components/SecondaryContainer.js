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
   <div className="relative z-20 -mt-24 md:-mt-32 bg-[#141414]">

      
      {/* Netflix fade from video */}
       <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

      {/* Rows */}
      <div className="relative space-y-12 px-6 md:px-12 lg:px-16 pb-24">
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
