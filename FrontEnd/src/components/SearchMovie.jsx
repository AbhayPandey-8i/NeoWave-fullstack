import axios from 'axios'
import React from 'react'
import { SEARCH_MOVIE_URL } from '../../utils/constant'
import { useState } from 'react'
import { options } from '../../utils/constant'
import { useDispatch, useSelector } from "react-redux"
import { setSearchMovieDetails } from '../redux/searchSlice'
import MovieList from './MovieList'


const SearchMovie = () => {

  const [searchMovie, setSearchMovie] = useState("")
  const dispatch = useDispatch()

const movieName = useSelector(store => store.searchMovie.movieName)
const searchedMovie = useSelector(store => store.searchMovie.searchedMovie)

  const submitHandler = async (e) => {
    e.preventDefault()

    try {
      const res = await axios.get(`${SEARCH_MOVIE_URL}${searchMovie}&include_adult=false&language=en-US&page=1`, options)
      console.log(res.data.results)
      const movies = res?.data?.results
      dispatch(setSearchMovieDetails({ searchMovie, movies }))
      

    } catch (error) {
      console.log(error)
    }
    setSearchMovie("")
  }


console.log("movieName:", movieName)
console.log("searchedMovie:", searchedMovie)

  return (

    <>

      <div className='flex justify-center pt-[10%] w-full ' >
        <form onSubmit={submitHandler} className='w-[50%]' >
          <div className='flex justify-between shadow-md border-2 p-2 border-gray-200 rounded-lg w-full' >
            <input value={searchMovie} onChange={(e) => { setSearchMovie(e.target.value) }
            } className='w-full outline-none rounded-md text-lg ' type="text" placeholder='Search Movies' />
            <button className='bg-red-800 text-white rounded-md px-4 py-2 ' >Search</button>
          </div>
        </form>
      </div>

     
      <MovieList title={movieName} searchMovie={true} movies={searchedMovie || []} />

    </>
  )
}

export default SearchMovie
