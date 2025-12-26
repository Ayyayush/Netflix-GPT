import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestions = () => {
  // 🔹 movieNames → array of strings (from GPT / mock GPT)
  // 🔹 movieResults → array of arrays (TMDB results for each movie)
  const { movieNames, movieResults } = useSelector(
    (store) => store.gpt
  );

  // Guard clause
  if (!movieNames || !movieResults) return null;

  return (
    <div className="bg-black px-6 md:px-12 pb-10">
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
