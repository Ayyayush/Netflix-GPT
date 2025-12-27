import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestions = () => {
  // 🔹 movieNames → array of strings (from GPT / mock GPT)
  // 🔹 movieResults → array of arrays (TMDB results for each movie)
  const { movieNames, movieResults } = useSelector((store) => store.gpt);

  // Guard clause
  if (!movieNames || !movieResults) return null;

  return (
    <div
      className="
        relative
        bg-[#141414]
        px-4 sm:px-6 md:px-12 lg:px-16
        pt-6 sm:pt-10
        pb-20
        space-y-10 sm:space-y-12
      "
    >
      {movieNames.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={movieResults[index]}
        />
      ))}
    </div>
  );
};

export default GPTMovieSuggestions;
