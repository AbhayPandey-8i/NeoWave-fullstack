import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovies: null,
        popularMovie: null,
        topRatedMovies: null,
        upcomingMovies: null
    },

      reducers:{
        getNowPlayingMovies:(state, action)=>{
            state.nowPlayingMovies = action.payload
        },

        getPopularMovie:(state,action)=>{
            state.popularMovie = action.payload
        },

        gettopRatedMovie:(state,action)=>{
            state.topRatedMovies = action.payload
        },
        getUpcomingMovie:(state,action)=>{
            state.upcomingMovies = action.payload
        },

          

      }

})

export const {getNowPlayingMovies, getPopularMovie, gettopRatedMovie, getUpcomingMovie} = movieSlice.actions
export default movieSlice.reducer