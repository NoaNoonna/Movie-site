import React, { useState, useEffect } from 'react';
import { Row, Col, Badge} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from "react-js-pagination";
import { movieActions } from '../redux/reducer/movieReducer';
import MovieDropdown from '../component/MovieDropdown';

const Movie = () => {
  const { popularMovies, genreList, searchMovie, sortedMovies, newRange } = useSelector((state)=>state.movie);
  const [ activePage, setActivePage ] = useState(1);
  const dispatch = useDispatch();

  console.log("sortedMovies^^^^", sortedMovies);
  console.log("newRange^^^^", newRange);
  console.log("searchMovie^^^^", searchMovie);

useEffect(()=>{
    dispatch(movieActions.getMoviesRequest());
  },[]);

  const handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    setActivePage(pageNumber);
  }

  const searchResult = searchMovie?.results || [];
  const popularResult = popularMovies?.results || [];

  console.log("popularResult?????", popularResult);
  
  //filter범위 내의 영화 구하기 
  const filteredMovies = newRange && newRange.min && newRange.max ? 
    popularResult.filter(movie => {
      const releaseYear = parseInt(movie.release_date.slice(0,4));
      return releaseYear >= newRange.min && releaseYear <= newRange.max;
    }) : [];

  console.log("filteredMovies!!!!!!!@@!!", filteredMovies);

  //pagination
  const moviesPerPage = 6;
  const indexOfLastMovie = activePage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;

  //sort 한 후에 filter를 하면 작동하지 않음. 해결하지 못함ㅠ
  const currentMovies = sortedMovies.length > 0 ?
  sortedMovies.slice(indexOfFirstMovie, indexOfLastMovie) :
  (searchResult.length > 0 ?
    searchResult.slice(indexOfFirstMovie, indexOfLastMovie) :
    (filteredMovies.length > 0 ?
      filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie) :
      (popularResult.length > 0 ?
        popularResult.slice(indexOfFirstMovie, indexOfLastMovie) : [])));

console.log("currentMovies????", currentMovies);          

const totalItemsCount = sortedMovies.length > 0 ? 
  sortedMovies.length : 
  (searchResult && searchResult.length > 0 ? 
      searchResult.length : 
      (filteredMovies.length > 0 ? 
          filteredMovies.length : 
          (popularResult ? popularResult.length : 0)));

  return (
    <div className="home-background">
      <Row>
        <Col lg={4}>
          <MovieDropdown movies={popularMovies}/>
        </Col>
     
        <Col lg={6}>
        <div className="pop-movie-card">
          <Row className="g-4">
            {currentMovies.map((movies, index)=>(
              <Col key={index}>
                <div className="movie-container">
                <div
                  className="movie-image" 
                    style={{
                      width:'24rem',
                      height:'28rem',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundImage: 
                        "url(" +
                          `https://media.themoviedb.org/t/p/w355_and_h200_multi_faces${movies.poster_path}` + 
                        ")"
                      }}
                  >
                    <div className="overlay2">
                        <div>
                            <img
                              width={60}
                              height={70} 
                              className="backdrop-img"
                              src={`https://media.themoviedb.org/t/p/w355_and_h200_multi_faces${movies.backdrop_path}`}/>
                          
                          <div className="movie-details">
                            <h4>{movies.title}</h4>
                            <p>{movies.release_date}</p>
                          </div>
                        </div>
                        
                        <p className="genres">
                            {movies.genre_ids.map((id)=> (
                              <Badge key={id} bg="danger" className="genre-badge">
                                {genreList.find(item => item.id == id).name}
                              </Badge> 
                            ))}
                        </p>
                        <p className="movie-overview">{movies.overview}</p>
                        <div className="popular-info2">
                          <span>🌟{movies.vote_average}</span>
                          <span>🗣️{movies.popularity}</span>
                          <span className="adult">{movies.adult?"🔞청불":"🔻Under 18"}</span>
                        </div>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          <div className="pagination-wrapper">
                <Pagination 
                  activePage={activePage}
                  itemsCountPerPage={moviesPerPage}
                  totalItemsCount={totalItemsCount}
                  pageRangeDisplayed={5}
                  onChange={handlePageChange}
                />
              </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Movie
