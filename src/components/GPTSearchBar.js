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
     🎞️ BACKGROUND PARALLAX ON SCROLL (NETFLIX FEEL)
     ====================================================== */
  useEffect(() => {
    const handleScroll = () => {
      setBgOffset(window.scrollY * 0.2);
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
       🎬 NETFLIX BACKGROUND CANVAS
       ====================================================== */
    <div className="relative min-h-[75vh] w-full overflow-hidden">

      {/* ================= POSTER WALL BACKGROUND ================= */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110 blur-[2px]"
        style={{
          backgroundImage: `url(${BG_URL})`,
          transform: `translateY(${bgOffset}px)`,
        }}
      />

      {/* ================= NETFLIX GRADIENT MASK ================= */}
      <div
        className="absolute inset-0
                   bg-gradient-to-b
                   from-black/90 via-black/40 to-black/90"
      />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 flex flex-col items-center pt-28">

        {/* ================= NETFLIX SEARCH BAR ================= */}
        <form
          onSubmit={handleSubmit}
          className="
            w-full max-w-3xl flex
            bg-white/15 backdrop-blur-xl
            rounded-2xl overflow-hidden
            border border-white/20
            shadow-[0_30px_100px_rgba(0,0,0,0.6)]
            transition-all
            focus-within:ring-2 focus-within:ring-red-600/70
          "
        >
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={languageConstants[langKey]?.gptSearchPlaceholder}
            className="
              flex-1 px-6 py-4
              bg-transparent text-white text-lg
              outline-none placeholder-gray-300
            "
          />

          <button
            disabled={loading}
            className="
              px-8 bg-red-600 hover:bg-red-700
              text-white font-semibold
              transition disabled:opacity-50
            "
          >
            {loading ? "Thinking..." : languageConstants[langKey]?.search}
          </button>
        </form>

        {/* ================= SUBTLE SHIMMER TEXT ================= */}
        <p className="mt-6 text-sm text-gray-300 tracking-wide animate-pulse">
          Discover movies the Netflix way
        </p>

        {/* ================= SOFT SEPARATOR ================= */}
        <div className="mt-14 h-px w-[85%]
                        bg-gradient-to-r
                        from-transparent via-white/20 to-transparent" />
      </div>
    </div>
  );
};

export default GPTSearchBar;
