 import axios from "axios"
import { gettopRatedMovie } from "../redux/movieSlice"
import { Now_Playing_Movies, options, Top_Rated_Movies } from "../../utils/constant"
import { use } from "react"
import { useDispatch } from "react-redux"
 
 const usetopRatedMovies = async () => {
     const dispatch = useDispatch()
    try {
      const res = await axios.get(Top_Rated_Movies, options)
      dispatch(gettopRatedMovie(res.data.results))
    } catch (error) {
      console.log(error)
    }

  }

  export default usetopRatedMovies