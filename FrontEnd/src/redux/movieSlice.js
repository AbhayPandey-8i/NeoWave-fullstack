import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovies: null,
        popularMovie: null,
        topRatedMovies: null,
        upcomingMovies: null,
        toggle: false,
        trailerMovie: null,
        open: false,
        id: ""
    },

    reducers: {
        getNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        },

        getPopularMovie: (state, action) => {
            state.popularMovie = action.payload
        },

        gettopRatedMovie: (state, action) => {
            state.topRatedMovies = action.payload
        },
        getUpcomingMovie: (state, action) => {
            state.upcomingMovies = action.payload
        },

        setToggle: (state) => {
            state.toggle = !state.toggle
        },
        getTrailerMovie: (state, action) => {
            state.trailerMovie = action.payload
        },
        setOpen: (state, action) => {
            state.open = action.payload
        },
        getId: (state, action) => {
            state.id = action.payload
        },
        // Add this inside reducers:
        resetTrailerMovie: (state) => {
            state.trailerMovie = null
        }


    }

})

export const { getNowPlayingMovies, getPopularMovie, gettopRatedMovie, getUpcomingMovie, setToggle, getTrailerMovie, setOpen, getId, resetTrailerMovie} = movieSlice.actions
export default movieSlice.reducer