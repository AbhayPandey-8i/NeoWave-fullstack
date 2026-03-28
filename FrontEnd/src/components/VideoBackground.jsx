import React from 'react'
import useMovieById from '../hooks/useMovieById'
import { useSelector } from 'react-redux'

const VideoBackground = ({movieId}) => {
     console.log("movieId received:", movieId)   

    const trailerMovie = useSelector(store=>store.movie.trailerMovie)
    console.log("trailerMovie in component:", trailerMovie)

  useMovieById(movieId)

  

    return (
        <div className='w-full' >
            <iframe className='w-full aspect-video'
                src={`https://www.youtube.com/embed/${trailerMovie?.key}?autoplay=1&mute=1`}
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen>

            </iframe>
        </div>
    )
}

export default VideoBackground
