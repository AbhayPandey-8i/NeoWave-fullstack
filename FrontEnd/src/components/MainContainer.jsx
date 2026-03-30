import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {

  const movie = useSelector(store => store.movie?.nowPlayingMovies)
  const selectedMovieId = useSelector(store => store.movie.id)

  if (!movie) return

  const mainMovie = movie?.find(m => m.original_language === 'en') || movie?.[0]

  const selectedMovie = movie?.find(m => m.id === selectedMovieId)

  const displayMovie = selectedMovie || mainMovie

  const { overview, id, title } = displayMovie || {}

  return (
    <div>
      <VideoTitle title={title} overview={overview} />
      <VideoBackground movieId={displayMovie?.id} />
    </div>
  )
}

export default MainContainer
