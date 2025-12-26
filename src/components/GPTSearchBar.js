import React, { useState, useRef } from "react";
import { BG_URL, API_OPTIONS, IMG_CDN_URL } from "../utils/constants";
import languageConstants from "../utils/languageConstants";
import { useSelector } from "react-redux";
import openai from "../utils/openai";
import { mockGptResponse } from "../utils/mockGpt";

const GPTSearchBar = () => {
  const [query, setQuery] = useState("");                 // user search text
  const [movies, setMovies] = useState([]);               // final TMDB movies
  const [loading, setLoading] = useState(false);          // loading state

  const cacheRef = useRef({});                             // cache results by query
  const langKey = useSelector((store) => store.config.lang);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // basic guards
    if (!query.trim() || loading) return;

    // ================= CACHE CHECK =================
    // If this query was already searched, reuse it
    if (cacheRef.current[query]) {
      setMovies(cacheRef.current[query]);
      return;
    }

    setLoading(true);

    try {
      let movieNames = [];

      /* =========================================================
         STEP 1: TRY GPT (OPENAI)
         ========================================================= */
      try {
        const gptPrompt =
          "Act as a movie recommendation system. " +
          "Give ONLY 5 movie names (comma separated) for: " +
          query;

        const gptResponse = await openai.chat.completions.create({
          model: "gpt-4.1-mini",
          messages: [{ role: "user", content: gptPrompt }],
        });

        // Convert GPT text → array of movie names
        movieNames = gptResponse.choices[0].message.content
          .split(",")
          .map((m) => m.trim());

        console.log("✅ Using GPT results:", movieNames);
      } catch (gptError) {
        /* =========================================================
           STEP 1 (FALLBACK): MOCK GPT
           ========================================================= */
        console.warn("⚠️ GPT failed, using mock GPT instead");

        movieNames = mockGptResponse(query);

        console.log("🧪 Using mock GPT results:", movieNames);
      }

      /* =========================================================
         STEP 2: FETCH MOVIES FROM TMDB (COMMON FOR BOTH)
         ========================================================= */
      const moviePromises = movieNames.map((movie) =>
        fetch(
          `https://api.themoviedb.org/3/search/movie` +
            `?query=${encodeURIComponent(movie)}` +
            `&include_adult=false&language=en-US&page=1`,
          API_OPTIONS
        ).then((res) => res.json())
      );

      const tmdbResults = await Promise.all(moviePromises);

      // pick first relevant result for each movie
      const finalMovies = tmdbResults
        .map((r) => r.results?.[0])
        .filter(Boolean);

      // cache results
      cacheRef.current[query] = finalMovies;
      setMovies(finalMovies);
    } catch (err) {
      console.error("❌ TMDB Error:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-[67vh] flex flex-col items-center pt-28 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${BG_URL})` }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* ================= SEARCH BAR ================= */}
      <form
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-2xl flex
                   bg-black/60 backdrop-blur-md
                   rounded-lg overflow-hidden border border-gray-700"
      >
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={languageConstants[langKey]?.gptSearchPlaceholder}
          className="flex-1 px-5 py-4 bg-transparent text-white
                     outline-none placeholder-gray-400"
        />

        <button
          disabled={loading}
          className="px-6 bg-red-600 text-white disabled:opacity-50"
        >
          {loading
            ? "Thinking..."
            : languageConstants[langKey]?.search}
        </button>
      </form>

      {/* ================= MOVIE RESULTS ================= */}
      <div className="relative z-10 mt-8 grid grid-cols-2 md:grid-cols-5 gap-4">
        {movies.map((movie) => (
          <img
            key={movie.id}
            src={IMG_CDN_URL + movie.poster_path}
            alt={movie.title}
            className="w-40 rounded-lg hover:scale-105 transition"
          />
        ))}
      </div>
    </div>
  );
};

export default GPTSearchBar;
