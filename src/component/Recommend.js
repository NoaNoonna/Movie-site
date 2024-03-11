import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

const Recommend = () => {
  const { recommendations } = useSelector((state) => state.movie);

//   console.log("recommendations????", recommendations);

  return (
    <div className="movie-card">
      <Row>
        {recommendations.map((movie)=>(
            <Col lg={4} >
                <img className="recom-movie" src={`https://media.themoviedb.org/t/p/w355_and_h200_multi_faces${movie.poster_path}`} />
                <h4 className="movie-title">{movie.title}</h4>
                <div className="recom-overview">{movie.overview}</div>
            </Col>
          ))}
      </Row>
    </div>
  )
}

export default Recommend;
