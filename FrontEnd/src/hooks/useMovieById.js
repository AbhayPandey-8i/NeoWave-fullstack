import axios from "axios";
import { useDispatch } from "react-redux";
import { getTrailerMovie } from '../redux/movieSlice';
import { useEffect } from "react";
import { options } from "../../utils/constant";

const useMovieById = (movieId) => {

  const dispatch = useDispatch();

  useEffect(() => {

    if (!movieId) return; // 🔥 important

    const getMovieById = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/videos`,
          options
        );

        console.log("API RESULT:", res.data.results);

        const trailer = res?.data?.results?.find(
          (item) => item.type === "Trailer"
        );

        dispatch(
          getTrailerMovie(
            trailer ? trailer : res.data.results[0]
          )
        );

        console.log("DISPATCHED TRAILER:", trailer);

      } catch (error) {
        console.log(error);
      }
    };

    getMovieById();

  }, [movieId, dispatch]);
};

export default useMovieById;