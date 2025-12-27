import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div
      className="
        relative
        min-w-[120px] sm:min-w-[150px] md:min-w-[180px] lg:min-w-[200px]
        transition-transform duration-300 ease-out
        hover:scale-110 hover:z-20
      "
    >
      <img
        className="
          w-full h-full
          rounded-md
          object-cover
          shadow-lg
          cursor-pointer
        "
        alt="Movie Poster"
        src={IMG_CDN_URL + posterPath}
      />
    </div>
  );
};

export default MovieCard;
