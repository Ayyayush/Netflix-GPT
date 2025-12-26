import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div
      className="
        relative min-w-[160px] md:min-w-[180px] lg:min-w-[200px]
        transition-transform duration-300 ease-out
        hover:scale-110 hover:z-20
      "
    >
      <img
        className="
          rounded-md
          cursor-pointer
          shadow-md
          object-cover
        "
        alt="Movie Poster"
        src={IMG_CDN_URL + posterPath}
      />
    </div>
  );
};

export default MovieCard;
