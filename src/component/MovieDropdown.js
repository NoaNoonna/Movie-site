import React, { useState } from 'react';
import { Form, Dropdown } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { movieActions } from '../redux/reducer/movieReducer';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

const MovieDropdown = ({movies}) => {
    const dispatch = useDispatch();
    const [ yearRange, setYearRange ] = useState({min: 2010, max:2024 });

    if(!movies || !movies.results){
        return null;
    }
    const handleYearChange = (newRange) => {
        setYearRange(newRange);

        dispatch(movieActions.filterByYearRangeSuccess({newRange}));
    };

    const getPopDesc = () => {
        const popularList = movies.results.map((item)=>item.popularity);
        console.log("popularList", popularList);

        //내림차순으로 정렬
        popularList.sort((a, b) => b - a);

        //정렬된 popularList를 이용하여 영화 목록을 정렬 
        const sortedMovies = popularList.map((popularity) => {
            return movies.results.find((movie) => movie.popularity === popularity);
        });
        console.log("Sorted Movies:", sortedMovies);
       
        dispatch(movieActions.setSortedMovieSuccess({ sortedMovies }));
    }

    const getPopAsc = () => {
        
        const popularList = movies.results.map((item)=>item.popularity);
        console.log("popularList", popularList);

        //오름차순으로 정렬
        popularList.sort((a, b) => a - b);

        //정렬된 popularList를 이용하여 영화 목록을 정렬 
        const sortedMovies = popularList.map((popularity) => {
            return movies.results.find((movie) => movie.popularity === popularity);
        });
        console.log("Sorted Movies:", sortedMovies);
       
        dispatch(movieActions.setSortedMovieSuccess({ sortedMovies }));
    }

  return (
        <div className="btn-container">
          <div className="dropdown">
            <Dropdown data-bs-theme="dark">
                <Dropdown.Toggle 
                    id="dropdown-button-dark-example1" 
                    variant="dark"
                    style={{
                        width:"250px",
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"space-between",
                        border:"1px solid white",
                        fontSize:"14pt",
                    }}
                >
                    Sort
                </Dropdown.Toggle>

                <Dropdown.Menu 
                    style={{
                        width:"250px",
                        border:"1px solid white",
                        textAlign:"center",
                    }}>
                <Dropdown.Item 
                        disabled
                        style={{ 
                            color:"red",
                            fontSize:"12pt",
                        }}
                    > 
                    Sort Results By 
                </Dropdown.Item>
                <Dropdown.Divider />
                
                <Dropdown.Item onClick={getPopDesc} style={{ fontSize:"14pt",}} >
                    Popularity (Desc)
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={getPopAsc} style={{ fontSize:"14pt",}} >
                    Popularity (Asc)
                </Dropdown.Item>
                
                </Dropdown.Menu>
            </Dropdown>
          </div>

          <div>
            <Dropdown data-bs-theme="dark" className="dropdown" autoClose={false}>
                <Dropdown.Toggle 
                    id="dropdown-button-dark-example1" 
                    variant="dark"
                    style={{
                        width:"250px",
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"space-between",
                        border:"1px solid white",
                        fontSize:"14pt",
                    }}
                >
                    Filter
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ width:"250px", border:"1px solid white", textAlign:"center",}}>
                <Dropdown.Item 
                        disabled
                        style={{
                            fontSize:"12pt",
                            color:"red",
                        }}
                    > 
                YEAR Filter
                </Dropdown.Item>
                <Dropdown.Divider />
                    <Dropdown.Item>
                        <Form style={{
                                display:"flex",
                                flexDirection:"column",

                        }}>        
                          <div className="range">
                            <InputRange
                                    maxValue={2024}
                                    minValue={2010}
                                    formatLabel={value => `${value}`}
                                    value={yearRange}
                                    onChange={handleYearChange}
                                />
                            </div>            
                         </Form>
                     </Dropdown.Item>
                </Dropdown.Menu>
             </Dropdown>
           </div>

        </div>
    );
};

export default MovieDropdown
