import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="min-w-[150px]">
      <img
        className="rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
        alt="Movie"
        src={IMG_CDN_URL + posterPath}
      />
    </div>
  );
};

export default MovieCard;
