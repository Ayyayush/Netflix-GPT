import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";

const VideoBackground = ({ movieId }) => {
  const dispatch = useDispatch();

  // Get trailer from redux store
  const trailerVideo = useSelector(
    (store) => store.movies?.trailerVideo
  );

  // Fetch movie videos from TMDB
  const getMovieVideos = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );

      const data = await response.json();

      // Prefer Trailer, fallback to first video
      const trailer =
        data.results.find((video) => video.type === "Trailer") ||
        data.results[0];

      dispatch(addTrailerVideo(trailer));
    } catch (error) {
      console.error("Error fetching trailer:", error);
    }
  };

  // Call API when movieId changes
  useEffect(() => {
    getMovieVideos();
  }, [movieId]);

  // Guard
  if (!trailerVideo) return null;

  return (
    <div className="absolute top-0 left-0 w-screen z-0">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&loop=1`}
        title="Trailer"
        allow="autoplay; fullscreen"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
