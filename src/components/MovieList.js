import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="space-y-3">
      {/* Row title */}
      <h2 className="text-lg md:text-xl font-semibold text-white tracking-wide">
        {title}
      </h2>

      {/* Horizontal scroll row */}
      <div
        className="
          flex gap-4
          overflow-x-scroll scrollbar-hide
          py-2
        "
      >
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            posterPath={movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
