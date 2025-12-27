import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";

const GPTSearch = () => {
  return (
    <div
      className="
        min-h-screen
        bg-black
        text-white
        pt-[64px] sm:pt-[72px] md:pt-[80px]
        overflow-x-hidden
      "
    >
      {/* Search Section */}
      <GPTSearchBar />

      {/* Results Section */}
      <GPTMovieSuggestions />
    </div>
  );
};

export default GPTSearch;
