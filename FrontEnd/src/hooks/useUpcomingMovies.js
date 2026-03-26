 import axios from "axios"
import { getNowPlayingMovies } from "../redux/movieSlice"
import { Now_Playing_Movies, options, Top_Rated_Movies, Upcoming_Movies } from "../../utils/constant"
import { use } from "react"
import { useDispatch } from "react-redux"
import { getUpcomingMovie } from "../redux/movieSlice"
 
 const useUpcomingMovies = async () => {
     const dispatch = useDispatch()
    try {
      const res = await axios.get(Upcoming_Movies, options)
      dispatch(getUpcomingMovie(res.data.results))
    } catch (error) {
      console.log(error)
    }

  }

  export default useUpcomingMovies