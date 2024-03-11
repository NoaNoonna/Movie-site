import React from 'react';
import { Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({item}) => {
  const { genreList } = useSelector((state) => state.movie);
  const navigate = useNavigate();
  
  const handleMovieClick = () => {
    navigate(`/movies/${item.id}`);
  }
  return (
    <div 
        className="card"
        style={{
            width:'20rem',
            height:'12rem',
            backgroundImage: 
                "url(" +
                `https://media.themoviedb.org/t/p/w355_and_h200_multi_faces${item.poster_path}` +
                ")",
    }}
    onClick={handleMovieClick}
    >
     <div className="overlay genres">
        <h2>{item.title}</h2>
        <div>{item.genre_ids.map((id) => (
            <Badge bg="danger" className="genre-badge">
                {genreList.find(item => item.id == id).name}
            </Badge>
            ))}</div>
      
        <div className="movie-info">
            <div className="rate">★{item.vote_average}</div>
            <div className="adult">{item.adult? "🔞청불":"🔻Under 18"}</div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
