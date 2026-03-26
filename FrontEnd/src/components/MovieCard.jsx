import React from 'react'
import { TMDB_Image_Url } from '../../utils/constant'

const MovieCard = ({posterpath}) => {
  return (
    <div className='w-48 pr-2' >
      <img src={`${TMDB_Image_Url}/${posterpath}`} alt="movie-banner" />
    </div>
  )
}

export default MovieCard
