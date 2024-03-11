import React, { useEffect, useState } from 'react';
import {Row, Col, Badge, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { movieAction } from '../redux/actions/movieAction';
import Review from '../component/Review';
import Recommend from '../component/Recommend';
import MovieTrailer from '../component/MovieTrailer';

const MovieDetail = () => {
  const dispatch = useDispatch();
  const { movieDetail, movieReview, recommendations } = useSelector((state) => state.movie);
  const [ showReviews, setShowReviews ] = useState(false);
  const [ showRelatedMovies, setShowRelatedMovies ] = useState(false);
  let {id} = useParams();

  console.log("recommendations???", recommendations);
 
  useEffect(()=>{
    dispatch(movieAction.getMovieDetail({id}));
 },[]);
 
    return (
    <div className="home-background">
      <div className="movie-detail">
        <Row>
          <Col>
            <img 
              className="detail-img"
              src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movieDetail.poster_path}`}
            />
          </Col>
          <Col>
            <div className="genre">
              {movieDetail.genres &&
                movieDetail.genres.map((item)=>(
                    <Badge 
                      bg="danger" 
                      className="genre-badge"
                      >
                        {item.name}
                    </Badge>
                  ))}
            </div>
            <h1 className="detail-title">{movieDetail.title}</h1>
            <div>{movieDetail.tagline}</div>
            <div className="popular-info">
              <span className="rate">★ {movieDetail.vote_average}</span>
              <span>🗣️{movieDetail.popularity}</span>
              <span className="adult">{movieDetail.adult? "🔞청불": "🔻Under 18"}</span>
            </div>
            <div className="bar"></div>
            <div className="overview">{movieDetail.overview}</div>
            <div className="bar"></div>
          
            <div className="budget-info">
              <div>
                <span><Badge bg="danger" className="detail-badge">Budget</Badge></span>
                <span>$ {movieDetail.budget}</span>
              </div>
              <div>
                <span><Badge bg="danger" className="detail-badge">Revenue</Badge></span>
                <span>$ {movieDetail.revenue}</span>
              </div>
              <div>
                <span><Badge bg="danger" className="detail-badge">Release Day</Badge></span>
                <span>{movieDetail.release_date}</span>
              </div>
              <div>
                <span><Badge bg="danger" className="detail-badge">⏰Time</Badge></span>
                <span>{movieDetail.runtime}</span>
              </div>
            </div>
            
            <div className="bar"></div>

            <div className="trailer">
              <span>
                <img 
                    width={100}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLJ6KnP_cAii_tJHIRYwNjNtt-j0GVJ8nI6yi8qG-QLnhZRZA1tGzgf2694QSd02rRQgQ&usqp=CAU"/></span>
                <MovieTrailer />
            </div>
          </Col>
        </Row>
      </div>
      
      <div className="review-btn">
        <Row>
          <Col>
            <Button 
                variant="danger"
                onClick={()=>{
                    setShowReviews(true);
                    setShowRelatedMovies(false);
                }}
                >
                  REVIEWS ({movieReview.length})
            </Button>
            <Button 
              variant="light"
              onClick={()=>{
                    setShowRelatedMovies(true);
                    setShowReviews(false);
                  }}
              >
                RELATED MOVIES ({recommendations.length})
            </Button>
        </Col>
        </Row>
      </div>

      {showReviews && <Review /> }
      {showRelatedMovies && <Recommend /> }
    </div>
  )
}

export default MovieDetail
