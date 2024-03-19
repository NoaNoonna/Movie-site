// import { movieActions } from "../reducer/movieReducer";
// import { put } from 'redux-saga/effects';

// export function* getMoviesSaga(){
//     yield put(movieActions.getMoviesRequest());
// }

// export function* getMovieDetailSaga(){
//     yield put(movieActions.getMovieDetail());
// }

// export function* searchMovieSaga(){
//     yield put(movieActions.searchMovie());
// }

// export function* sortByResultSaga(){
//     yield put(movieActions.sortByResult());
// }


// function getMovies(){
//     return async(dispatch) => {
//         try{
//             // dispatch({ type: "GET_MOVIES_REQUEST"});
//             dispatch(movieActions.getMoviesRequest());

//             const popularMovieApi = api.get(
//                 `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
//             );
//             const topRatedMovieApi = api.get(
//                 `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
//             );
//             const upcomingMovieApi = api.get(
//                 `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
//             );
//             const genreApi = api.get(
//                 `/genre/movie/list?api_key=${API_KEY}&language=en-US`
//               );
            
        
//         let [popularMovies, topRatedMovies, upComingMovies, genreList] = await Promise.all([
//             popularMovieApi, 
//             topRatedMovieApi, 
//             upcomingMovieApi,
//             genreApi,
//         ]);
    
//         // dispatch({
//         //     type: "GET_MOVIES_SUCCESS",
//         //     payload: {
//         //         popularMovies: popularMovies.data,
//         //         topRatedMovies: topRatedMovies.data,
//         //         upComingMovies: upComingMovies.data,
//         //         genreList: genreList.data.genres,

//         //     },
//         // });
//         dispatch(movieActions.getMoviesSuccess({
//                 popularMovies: popularMovies.data,
//                 topRatedMovies: topRatedMovies.data,
//                 upComingMovies: upComingMovies.data,
//                 genreList: genreList.data.genres,
//         }));

//         }catch(error){
//             //에러 핸들링
//             // dispatch({type: "GET_MOVIES_FAILURE"});
//             dispatch(movieActions.getMoviesFailure());
//         }
//      }
// }

// function getMovieDetail({id}){
//     return async(dispatch) => {

//         const movieDetailApi = api.get(
//             `/movie/${id}?api_key=${API_KEY}&language=en-US`
//         );

//         const movieReviewApi = api.get(
//             `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
//         )

//         const recommendationsApi = api.get(
//             `/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`
//         )

//         const movieTrailerApi = api.get(
//             `/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
//         )

//         let [ movieDetail, movieReview, recommendations, movieTrailer ] = await Promise.all([
//             movieDetailApi,
//             movieReviewApi,
//             recommendationsApi,
//             movieTrailerApi,
//         ])

//         console.log("movieTrailer?", movieTrailer);

//         // dispatch({ 
//         //     type: "GET_MOVIE_DETAIL", 
//         //     payload: { 
//         //         movieDetail: movieDetail.data,
//         //         movieReview: movieReview.data.results,
//         //         recommendations: recommendations.data.results,
//         //         movieTrailer: movieTrailer.data.results,
//         //      }
//         // });
//         dispatch(movieActions.getMovieDetail({
//             movieDetail: movieDetail.data,
//             movieReview: movieReview.data.results,
//             recommendations: recommendations.data.results,
//             movieTrailer: movieTrailer.data.results,
//         }))
//     }
// }


// function searchMovie({keyword}){
//     return async(dispatch) => {
//         const searchMovieApi = api.get(
//             `/search/movie?query=${keyword}&include_adult=true&language=en-US&page=1&api_key=${API_KEY}`
//         );

//         let [ searchMovie, ] = await Promise.all([
//             searchMovieApi,
//         ])

//         console.log("searchMovie??", searchMovie);

//         // dispatch({ type: "SEARCH_MOVIE", 
//         //     payload:{ 
//         //         searchMovie: searchMovie.data,
//         // }});
//         dispatch(movieActions.searchMovie({searchMovie: searchMovie.data}));
//     }
// }


// function sortByResult({sortedMovies}){
//     console.log("sortedMovies!!!!!!", sortedMovies)
//     return (dispatch) => {
//         // dispatch({
//         //     type: "SET_SORTED_MOVIES", 
//         //     payload: {sortedMovies},
//         // })
//         dispatch(movieActions.setSortedMovie({sortedMovies}));
//     }
// }

// function filterByYearRange({newRange}){
//     return(dispatch) => {
//         // dispatch({
//         //     type:"FILTER_BY_YEAR_RANGE",
//         //     payload: {newRange }
//         // })
//         dispatch(movieActions.filterByYearRange({newRange}));
//     }
// }
