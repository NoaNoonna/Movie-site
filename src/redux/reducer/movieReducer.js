import { createSlice } from '@reduxjs/toolkit';

let initialState = {
    popularMovies: {},
    topRatedMovies: {},
    upComingMovies: {},
    loading: true,
    genreList: [],
    movieDetail: {},
    movieReview: [],
    recommendations: [],
    movieTrailer: {},
    searchMovie: {},
    sortedMovies: [],
};

const movieSlice = createSlice({
    name: "movie", 
    initialState,
    reducers:{
        getMoviesRequest(state, action){
            state.loading = true;
        },
        getMoviesSuccess(state, action){
            state.popularMovies = action.payload.popularMovies;
            state.topRatedMovies = action.payload.topRatedMovies;
            state.upComingMovies = action.payload.upComingMovies;
            state.loading = false;
            state.genreList = action.payload.genreList;
        },
        getMoviesFailure(state, action){
            state.loading = false;
        },
        getMovieDetailRequest(state, action){
            state.loading = true;
        },
        getMovieDetailSuccess(state, action){
            const id = action.payload.id;
            console.log("reducer_id?", id);
            state.movieDetail = action.payload.movieDetail;
            state.movieReview = action.payload.movieReview; 
            state.recommendations = action.payload.recommendations;
            state.movieTrailer = action.payload.movieTrailer;
        },
        getMovieDetailFailure(state, action){
            state.loading = false;
        },
        searchMovieRequest(state, action){
            state.loading = false;
        },
        searchMovieSuccess(state, action){
            state.searchMovie = action.payload.searchMovie;
        },
        searchMovieFailure(state, action){
            state.loading = false;
        },
        setSortedMovieRequest(state, action){
            state.loading = false;
        },
        setSortedMovieSuccess(state, action){
            state.sortedMovies = action.payload.sortedMovies;
        },
        setSortedMovieFailure(state, action){
            state.loading = false;
        },
        filterByYearRangeRequest(state, action){
            state.loading = false;
        },
        filterByYearRangeSuccess(state, action){
            state.newRange = action.payload.newRange;
        },
        filterByYearRangeFailure(state, action){
            state.loading = false;
        },
    },
});

export const movieActions = movieSlice.actions;
export default movieSlice.reducer;


// function movieReducer(state = initialState, action){
//     if(action.type === "GET_MOVIES_REQUEST"){
//         return{ ...state, loading: true }
//     }
//     else if(action.type === "GET_MOVIES_SUCCESS"){
//         return {
//             ...state, 
//             popularMovies: action.payload.popularMovies,
//             topRatedMovies: action.payload.topRatedMovies,
//             upComingMovies: action.payload.upComingMovies,
//             loading: false,
//             genreList: action.payload.genreList,
//         }
//     }
//     else if(action.type === "GET_MOVIES_FAILURE"){
//         return{ ...state, loading: false }
//     }
//     else if(action.type === "GET_MOVIE_DETAIL"){
//         return{ 
//             ...state, 
//             movieDetail: action.payload.movieDetail, 
//             movieReview: action.payload.movieReview, 
//             recommendations: action.payload.recommendations,
//             movieTrailer: action.payload.movieTrailer,
//         }
//     }
//     else if(action.type === "SEARCH_MOVIE"){
//         return{
//             ...state,
//             searchMovie: action.payload.searchMovie,
//         }
//     }
//     else if(action.type === "SET_SORTED_MOVIES"){
//         return{
//             ...state,
//             sortedMovies: action.payload.sortedMovies,
//         }
//     }
//     else if(action.type === "FILTER_BY_YEAR_RANGE"){
//         return{
//             ...state,
//             newRange: action.payload.newRange,
//         }
//     }
//     return { ...state }
// }

// export default movieReducer;