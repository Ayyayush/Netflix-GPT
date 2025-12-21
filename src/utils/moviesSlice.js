import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    // Existing
    nowPlayingMovies: null,
    trailerVideo: null,

    // Added for other hooks
    upcomingMovies: null,
    topRatedMovies: null,
    popularMovies: null,
  },
  reducers: {
    // Existing reducer
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },

    // Added reducers (used by new hooks)
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },

    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },

    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },

    // Existing
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addUpcomingMovies,
  addTopRatedMovies,
  addPopularMovies,
  addTrailerVideo,
} = moviesSlice.actions;

export default moviesSlice.reducer;
