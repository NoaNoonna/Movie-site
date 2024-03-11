import './App.css';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Movie from './pages/Movie';
import MovieDetail from './pages/MovieDetail';
import Navigation from './component/Navigation';

//1. 페이지 3개 필요. 홈페이지, movie 페이지, movieDetail 페이지
//2. 홈페이지 배너 볼 수 있음
//3. 3가지 섹션의 영화를 볼 수 있음 (popular, top rated, upcoming movies)
//4. 각 영화에 마우스를 올려두면 제목, 장르, 점수, 인기도, 청불여부 
//5. 영화를 슬라이드로 넘기면서 볼 수 있음
//6. 영화 디테일 페이지에서 영화에 대한 디테일한 정보를 볼 수 있음 (포스터, 제목, 줄거리, 점수, 인기도, 청불여부, 예산, 이익, 러닝타임)

//7. 트레일러를 누르면 예고편을 볼 수 있음 
//8. 영화의 리뷰도 볼 수 있음
//9. 관련 영화도 볼 수 있음

//10. 영화 검색을 할 수 있음 
//11. 영화 정렬 가능
//12. 영화 필터링 가능

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movie />}></Route>
        <Route path="/movies/:id" element={<MovieDetail /> }></Route>
      </Routes>
    </div>
  );
}

export default App;
