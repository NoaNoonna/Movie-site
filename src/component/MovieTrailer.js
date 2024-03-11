import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import YouTube from 'react-youtube';
import { useSelector } from 'react-redux';

const MovieTrailer = () => {
    const { movieTrailer } = useSelector((state) => state.movie);

    console.log("movieTrailer?????", movieTrailer);
    const [lgShow, setLgShow] = useState(false);
    const [ playerWidth, setPlayerWidth ] = useState('640');
    const [ playerHeight, setPlayerHeight ] = useState('390');

  return (
    <span>
      <span className="trailer-btn">
      <Button 
        variant="outline-dark" 
        onClick={()=>setLgShow(true)}
        >
        Watch Trailer
      </Button>
      </span>

      <div>
        <Modal
            size="lg"
            show={lgShow}
            onHide={() => setLgShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
            className="custom-modal" 
        >
            <div closeButton>
              <h2 className="trailer-title" id="example-modal-sizes-title-lg">
                  Movie Trailer
              </h2>
              <div className="bar3"></div>
            </div>

            <div className="trailer-video">
                {movieTrailer.length > 0 && (
                    <YouTube 
                        videoId={movieTrailer[0].key} 
                        opts={{ width: playerWidth, height: playerHeight }}/>)} 
            </div>
            <div className="modal-btn">
              <Button
                  variant="outline-danger" 
                  onClick={()=>setLgShow(false)}
                  >
                      Thank you For Watching!
              </Button>
            </div>
        </Modal>
      </div>
    </span>
  )
}

export default MovieTrailer
