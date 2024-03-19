import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import api from '../api';
import { movieActions } from '../reducer/movieReducer';

const API_KEY = process.env.REACT_APP_API_KEY;

function* fetchMovies(){
    try{
        const popularMovieApi = yield call(api.get, `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
        const topRatedMovieApi = yield call(api.get, `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
        const upcomingMovieApi = yield call(api.get, `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);
        const genreApi = yield call (api.get, `/genre/movie/list?api_key=${API_KEY}&language=en-US`);
        
        yield put(movieActions.getMoviesSuccess({
            popularMovies: popularMovieApi.data,
            topRatedMovies: topRatedMovieApi.data,
            upComingMovies: upcomingMovieApi.data,
            genreList: genreApi.data.genres,
        }));
    } catch(error){
        yield put(movieActions.getMoviesFailure());
    }
}

function* fetchMoviesDetail(action){
    const id = action.payload.id;
    console.log("fetch_id?", id);
    try{
        const movieDetailApi = yield call(api.get, `/movie/${id}?api_key=${API_KEY}&language=en-US`);
        const movieReviewApi = yield call(api.get, `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`);
        const recommendationsApi = yield call(api.get,  `/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`);
        const movieTrailerApi = yield call(api.get, `/movie/${id}/videos?api_key=${API_KEY}&language=en-US`);

        yield put(movieActions.getMovieDetailSuccess({
            movieDetail: movieDetailApi.data,
            movieReview: movieReviewApi.data.results,
            recommendations: recommendationsApi.data.results,
            movieTrailer: movieTrailerApi.data.results,
        }));
    }catch(error){
        yield put(movieActions.getMovieDetailFailure());
    }
}

function* fetchSearchMovie(action){
    const keyword = action.payload;
    console.warn("keyword@@", keyword);
    try{
        const searchMovieApi = yield call(api.get, `/search/movie?query=${keyword}&include_adult=true&language=en-US&page=1&api_key=${API_KEY}`);

        yield put(movieActions.searchMovieSuccess({
            searchMovie: searchMovieApi.data
            
        }));
    }catch(error){
        yield put(movieActions.searchMovieFailure());
    }
}

function* fetchSortByResult({sortedMovies}){
    yield put(movieActions.setSortedMovieSuccess({sortedMovies}));
}

function* fetchFilterByRange({newRange}){
    yield put(movieActions.filterByYearRangeSuccess({newRange}));
}

function* watchFetchMovies(){
    yield takeLatest(movieActions.getMoviesRequest.type, fetchMovies);
    yield takeLatest(movieActions.getMovieDetailRequest.type, fetchMoviesDetail);
    yield takeLatest(movieActions.searchMovieRequest.type, fetchSearchMovie);
    yield takeLatest(movieActions.setSortedMovieRequest.type, fetchSortByResult);
    yield takeLatest(movieActions.filterByYearRangeRequest.type, fetchFilterByRange);
}

export function* rootSaga(){
    yield all([
        watchFetchMovies(),
    ]);
};

