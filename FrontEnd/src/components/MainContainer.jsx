import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {

  
   const movie = useSelector(store=>store.movie?.nowPlayingMovies)
   console.log("Movies from Redux:", movie)

      // const mainMovie = movie?.[0]
      const mainMovie = movie?.find(m => m.original_language === 'en') || movie?.[0]

  console.log("Main Movie:", mainMovie)
  console.log("Movie ID:", mainMovie?.id)

   if (!movie) return // this is called early return in react

  //  const {overview, id, title} = movie[4]
  const {overview, id, title} = mainMovie
    
   

  return (
    <div >
        <VideoTitle title={title} overview={overview} />
      <VideoBackground movieId={mainMovie?.id} />
    </div>
  )
}

export default MainContainer
