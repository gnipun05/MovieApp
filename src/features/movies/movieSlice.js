import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import movieApi from "../../common/apis/movieApi"
import { APIKey} from "../../common/apis/movieApiKey"

export const fetchAsyncMovies = createAsyncThunk(
    "movies/fetchAsyncMovies",
    async(term) => {
        const response = await movieApi
            .get(`?apikey=${APIKey}&s=${term}&type=movie`)
        return response.data
    }
)

export const fetchAsyncshows = createAsyncThunk(
    "movies/fetchAsyncshows",
    async(term) => {
        const response = await movieApi
            .get(`?apikey=${APIKey}&s=${term}&type=series`)
        return response.data
    }
)

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
    "movies/fetchAsyncMovieOrShowDetail",
    async(id) => {
        const response = await movieApi
            .get(`?apikey=${APIKey}&i=${id}&Plot=full`)
        return response.data
    }
)

const initialState = {
    movies: {},
    shows: {},
    selectedMovieOrShow: {},
    processing: false
};

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers : {
        removeSelectedMovieOrShow: (state) => {
            state.selectedMovieOrShow = {};
        }
    }, 
    extraReducers: {
        [fetchAsyncMovies.pending]: (state) => {
            console.log("pending and ", state.processing)
            return {...state, processing: true}
        },
        [fetchAsyncMovies.fulfilled]: (state, {payload}) => {
            console.log("Fetched Movies Successfully and ",state. processing)
            return {...state, movies: payload, processing: false}
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("rejected")
            return {processing: false}
        }, 

        [fetchAsyncshows.fulfilled]: (state, {payload}) => {
            console.log("Fetched Shows Successfully and ", state.processing)
            return {...state, shows: payload, processing: false}
        },

        [fetchAsyncMovieOrShowDetail.fulfilled]: (state, {payload}) => {
            console.log("Fetched Details Successfully and ", state.processing)
            return {...state, selectedMovieOrShow: payload, processing: false}
        },
    }
})

export const {removeSelectedMovieOrShow} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies; 
export const getAllshows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieOrShow;
export const getProcessing = (state) => state.movies.processing;
export default movieSlice.reducer; 