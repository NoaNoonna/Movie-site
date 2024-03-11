import React from 'react';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Review = () => {
  const { movieReview } = useSelector((state) => state.movie);

  return (
    <div className="review-card">
    {movieReview.map((review)=>(        
        <Card 
          style={{ 
            width: '95rem',
            backgroundColor:'black',
            }}>
          <Card.Body className="review-info">
            <Card.Title>{review.author}</Card.Title>
            <div className="bar2"></div>
            <Card.Text>
              {review.content}
            </Card.Text>
          </Card.Body>
        </Card>
     ))}
  </div>
  )
}

export default Review
