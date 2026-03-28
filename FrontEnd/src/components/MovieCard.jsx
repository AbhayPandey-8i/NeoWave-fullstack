import React from 'react'
import { TMDB_Image_Url } from '../../utils/constant'
import { useDispatch } from 'react-redux'
import { getId, setOpen } from '../redux/movieSlice'

const MovieCard = ({posterpath, movieId}) => {
const dispatch = useDispatch()

    const handleOpen = () => {
      dispatch(getId(movieId))
      dispatch(setOpen(true))
    }
    

  return (
    <div onClick={handleOpen} className='w-48 pr-2' >
      <img src={`${TMDB_Image_Url}/${posterpath}`} alt="movie-banner" />
    </div>
  )
}

export default MovieCard
