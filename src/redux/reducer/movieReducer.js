let initialState = {
    popularMovies: {},
    topRatedMovies: {},
    upComingMovies: {},
    loading: true,
    genreList: [],
    movieDetail: {},
    movieReview: {},
    recommendations: {},
    movieTrailer: {},
    searchMovie: {},
    sortedMovies: [],
};

function movieReducer(state = initialState, action){
    if(action.type === "GET_MOVIES_REQUEST"){
        return{ ...state, loading: true }
    }
    else if(action.type === "GET_MOVIES_SUCCESS"){
        return {
            ...state, 
            popularMovies: action.payload.popularMovies,
            topRatedMovies: action.payload.topRatedMovies,
            upComingMovies: action.payload.upComingMovies,
            loading: false,
            genreList: action.payload.genreList,
        }
    }
    else if(action.type === "GET_MOVIES_FAILURE"){
        return{ ...state, loading: false }
    }
    else if(action.type === "GET_MOVIE_DETAIL"){
        return{ 
            ...state, 
            movieDetail: action.payload.movieDetail, 
            movieReview: action.payload.movieReview, 
            recommendations: action.payload.recommendations,
            movieTrailer: action.payload.movieTrailer,
        }
    }
    else if(action.type === "SEARCH_MOVIE"){
        return{
            ...state,
            searchMovie: action.payload.searchMovie,
        }
    }
    else if(action.type === "SET_SORTED_MOVIES"){
        return{
            ...state,
            sortedMovies: action.payload.sortedMovies,
        }
    }
    else if(action.type === "FILTER_BY_YEAR_RANGE"){
        return{
            ...state,
            newRange: action.payload.newRange,
        }
    }
    return { ...state }
}

export default movieReducer;