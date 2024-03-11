import React, { useEffect } from 'react';
import { movieAction } from '../redux/actions/movieAction';
import { useDispatch, useSelector } from 'react-redux';
import Banner from '../component/Banner';
import MovieSlide from '../component/MovieSlide';
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
 const dispatch = useDispatch();
 
 const { popularMovies, topRatedMovies, upComingMovies, loading, searchMovie } = useSelector(
    (state) => state.movie);

 useEffect(()=>{
    dispatch(movieAction.getMovies());
  },[]);

  if(loading){
    return  <ClipLoader color="#ffff" loading={loading} size={150} />
  }
  return (
    <div className="home-background">
      <Banner movie={popularMovies.results[0]} />

      <div className="main-page">
        {searchMovie.results && searchMovie.results.length > 0 && searchMovie ? (
          <>
            <h1>Search Results</h1>
            <MovieSlide movies={searchMovie} />
          </>
        ) : (
          <>
          <h1>Popular Movie</h1> 
          <MovieSlide movies={popularMovies}/>

          <h1>Top rated Movie</h1>   
          <MovieSlide movies={topRatedMovies}/>      
          
          <h1>Upcoming Movie</h1>      
          <MovieSlide movies={upComingMovies}/>  
          </>
          )}
      </div>
    </div>
  )
}

export default Home
