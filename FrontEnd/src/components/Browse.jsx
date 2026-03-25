import React from 'react'
import Header from './Header'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import MainContainer from './MainContainer'
import MovieContainer from './MovieContainer'
import axios from 'axios'
import { Now_Playing_Movies, options } from '../../utils/constant'
import { getNowPlayingMovies } from '../redux/movieSlice'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'


const Browse = () => {

  const user = useSelector(store => store.app.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  //custom hooks
  useNowPlayingMovies()

  useEffect(() => {
    if (!user) {
      navigate("/")

    }
    // useNowPlayingMovies()
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
