import React from 'react'
import Header from './Header'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import MainContainer from './MainContainer'
import MovieContainer from './MovieContainer'
import axios from 'axios'
import { Now_Playing_Movies, options, Upcoming_Movies } from '../../utils/constant'
import { getNowPlayingMovies } from '../redux/movieSlice'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import { getUpcomingMovie } from '../redux/movieSlice'
import useUpcomingMovies from '../hooks/useUpcomingMovies'


const Browse = () => {

  const user = useSelector(store => store.app.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  //custom hooks
  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()
  useUpcomingMovies()

  useEffect(() => {
    if (!user) {
      navigate("/")

    }
  
  }, [])



  return (



    <div>
      <Header />
      <div>
        <MainContainer />
        <MovieContainer />
      </div>
    </div>
  )
}

export default Browse
