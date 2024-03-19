import React, { useState } from 'react';
import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { movieActions } from '../redux/reducer/movieReducer';

const Navigation = () => {
  const[ keyword, setKeyword ] = useState('');
  const dispatch = useDispatch();

  //검색 기능
  const searchEnter = (event) => {
    event.preventDefault();
    dispatch(movieActions.searchMovieRequest(keyword));
    console.log("keyword?????", keyword);
  };

  //입력필드 삭제하면 자동으로 전체 영화 검색 
  const handleInputChange = (event) => {
    const value = event.target.value;
    setKeyword(value);

    if(value === ''){
      dispatch(movieActions.searchMovieSuccess({keyword:''}));
    }
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
    <Container fluid>
      <Navbar.Brand href="#">
        <img 
            width={100}
            src='https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940' 
            />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/movies" className="nav-item">Movies</Link>
          
        </Nav>
        <Form className="d-flex" onSubmit={(event)=>searchEnter(event)}>
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            value={keyword}
            onChange={handleInputChange}
          />
          <Button type="submit" variant="outline-danger">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navigation;
