import React, { useState } from "react";
import { BG_URL } from "../utils/constants";

const GPTSearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    console.log("Searching for:", query);
    // 👉 GPT API call later
  };

  return (
    <div
      className="min-h-[67vh] flex items-start justify-center pt-28 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${BG_URL})` }}
    >
      {/* Faded overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Search Box */}
      <form
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-2xl flex 
                   bg-black/60 backdrop-blur-md 
                   rounded-lg overflow-hidden 
                   border border-gray-700"
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="What would you like to watch today?"
          className="flex-1 px-5 py-4 bg-transparent text-white 
                     outline-none placeholder-gray-400"
        />

        <button
          type="submit"
          className="px-6 bg-red-600 hover:bg-red-700 
                     transition text-white font-semibold"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
