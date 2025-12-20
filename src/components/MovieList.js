import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return null;

  return (
    <div className="mb-8">
      <h1 className="text-xl md:text-2xl font-semibold text-white mb-4">
        {title}
      </h1>

      <div className="flex gap-4 overflow-x-scroll scrollbar-hide">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            posterPath={movie.poster_path}   // ✅ FIX HERE
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
