import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const topRatedMovies = useSelector(
    (store) => store.movies.topRatedMovies
  );

  const getTopRatedMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        API_OPTIONS
      );

      const data = await response.json();

      dispatch(addTopRatedMovies(data.results));
    } catch (error) {
      console.error("Error fetching top rated movies:", error);
    }
  };

  useEffect(() => {
    if (!topRatedMovies || topRatedMovies.length === 0) {
      getTopRatedMovies();
    }
  }, []);
};

export default useTopRatedMovies;
