import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector(
    (store) => store.movies.trailerVideo
  );

  useEffect(() => {
    // 🔒 Prevent refetch if trailer already exists
    if (!movieId || trailerVideo) return;

    const getMovieVideos = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
          API_OPTIONS
        );

        const data = await response.json();

        const trailer =
          data.results.find((v) => v.type === "Trailer") ||
          data.results[0];

        dispatch(addTrailerVideo(trailer));
      } catch (err) {
        console.error("Trailer fetch failed:", err);
      }
    };

    getMovieVideos();
  }, [movieId, trailerVideo, dispatch]);
};

export default useMovieTrailer;
