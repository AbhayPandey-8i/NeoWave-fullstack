import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    console.log(movies)
    
  return (
    <div className='px-8'>
      
      <h1 className='text-3xl py-3 text-white'>{title}</h1>

      <div className='overflow-x-auto no-scrollbar cursor-pointer flex' >
        <div className='flex items-center'>
          
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} posterpath={movie.poster_path} />
          ))}

        </div>
      </div>

    </div>
  )
}

export default MovieList