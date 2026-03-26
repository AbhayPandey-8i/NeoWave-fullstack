import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { options, Popular_Movies } from '../../utils/constant'
import { getPopularMovie } from '../redux/movieSlice'


const usePopularMovies = async () => {
    
const dispatch = useDispatch()
    
   try {
    const res = await axios.get(Popular_Movies, options)
    dispatch(getPopularMovie(res.data.results))
   } catch (error) {
    console.log(error)
   }
}

export default usePopularMovies
