import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",

  initialState: {
    showGptSearch: false,      // controls GPT Search vs Home UI
    movieNames: null,          // ["Gadar 2", "Kesari", ...]
    movieResults: null,        // [[tmdbResults], [tmdbResults], ...]
  },

  reducers: {
    // 🔁 Toggle GPT Search page
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },

    // 🎬 Store GPT + TMDB results
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;

      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});

export const {
  toggleGptSearchView,
  addGptMovieResult,
} = gptSlice.actions;

export default gptSlice.reducer;
