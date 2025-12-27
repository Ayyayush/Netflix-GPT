import React, { useState, useRef, useEffect } from "react";
import { BG_URL, API_OPTIONS } from "../utils/constants";
import languageConstants from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { mockGptResponse } from "../utils/mockGpt";
import { addGptMovieResult } from "../utils/gptSlice";

const GPTSearchBar = () => {
  const [query, setQuery] = useState("");                 // user input
  const [loading, setLoading] = useState(false);         // loading flag
  const [bgOffset, setBgOffset] = useState(0);           // scroll parallax

  const cacheRef = useRef({});                            // cache results
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);

  /* ======================================================
     🎞️ BACKGROUND PARALLAX (SUBTLE – MOBILE SAFE)
     ====================================================== */
  useEffect(() => {
    const handleScroll = () => {
      setBgOffset(window.scrollY * 0.15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim() || loading) return;

    // ================= CACHE CHECK =================
    if (cacheRef.current[query]) {
      dispatch(addGptMovieResult(cacheRef.current[query]));
      return;
    }

    setLoading(true);

    try {
      let movieNames = [];

      /* ================= TRY OPENAI ================= */
      try {
        const gptPrompt =
          "Act as a movie recommendation system. " +
          "Give ONLY 5 movie names (comma separated) for: " +
          query;

        const gptResponse = await openai.chat.completions.create({
          model: "gpt-4.1-mini",
          messages: [{ role: "user", content: gptPrompt }],
        });

        movieNames = gptResponse.choices[0].message.content
          .split(",")
          .map((m) => m.trim());
      } catch {
        /* ================= FALLBACK MOCK GPT ================= */
        movieNames = mockGptResponse(query);
      }

      /* ================= TMDB FETCH ================= */
      const moviePromises = movieNames.map((movie) =>
        fetch(
          `https://api.themoviedb.org/3/search/movie` +
            `?query=${encodeURIComponent(movie)}` +
            `&include_adult=false&language=en-US&page=1`,
          API_OPTIONS
        ).then((res) => res.json())
      );

      const tmdbResults = await Promise.all(moviePromises);
      const movieResults = tmdbResults.map((r) => r.results || []);

      const payload = { movieNames, movieResults };
      cacheRef.current[query] = payload;
      dispatch(addGptMovieResult(payload));
    } catch (err) {
      console.error("TMDB Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    /* ======================================================
       🎬 NETFLIX HERO CANVAS
       ====================================================== */
    <div className="relative min-h-[70vh] sm:min-h-[75vh] w-full overflow-hidden">

      {/* ================= BACKGROUND WALL ================= */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110 blur-[1.5px]"
        style={{
          backgroundImage: `url(${BG_URL})`,
          transform: `translateY(${bgOffset}px)`,
        }}
      />

      {/* ================= NETFLIX GRADIENT MASK ================= */}
      <div
        className="absolute inset-0
                   bg-gradient-to-b
                   from-black/90 via-black/45 to-black/90"
      />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 flex flex-col items-center pt-24 sm:pt-28 px-4">

        {/* ================= SEARCH BAR ================= */}
        <form
          onSubmit={handleSubmit}
          className="
            w-full max-w-xl sm:max-w-2xl md:max-w-3xl
            flex
            bg-white/15 backdrop-blur-xl
            rounded-xl sm:rounded-2xl
            overflow-hidden
            border border-white/20
            shadow-[0_25px_80px_rgba(0,0,0,0.6)]
            focus-within:ring-2 focus-within:ring-red-600/70
            transition
          "
        >
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={languageConstants[langKey]?.gptSearchPlaceholder}
            className="
              flex-1 px-4 sm:px-6 py-3 sm:py-4
              bg-transparent text-white
              text-base sm:text-lg
              outline-none placeholder-gray-300
            "
          />

          <button
            disabled={loading}
            className="
              px-5 sm:px-8
              bg-red-600 hover:bg-red-700
              text-white font-semibold
              text-sm sm:text-base
              transition disabled:opacity-50
            "
          >
            {loading ? "Thinking..." : languageConstants[langKey]?.search}
          </button>
        </form>

        {/* ================= SUBTEXT ================= */}
        <p className="mt-5 sm:mt-6 text-xs sm:text-sm text-gray-300 tracking-wide animate-pulse">
          Discover movies the Netflix way
        </p>

        {/* ================= SEPARATOR ================= */}
        <div className="mt-10 sm:mt-14 h-px w-[90%] sm:w-[85%]
                        bg-gradient-to-r
                        from-transparent via-white/20 to-transparent" />
      </div>
    </div>
  );
};

export default GPTSearchBar;
