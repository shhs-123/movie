import React, { useEffect, useState } from 'react';
import { API_KEY, API_URL, IMAGE_BASE_URL } from '../Config';
import MainImage from './Section/Mainimage';
import { Row } from 'antd';
// import GridCards from '../commons/GridCards';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';  // 변수 ?
import AntCard from '../commons/AntCard';




function Landingpage() {

  const navigate = useNavigate();
  const [movies, setmovies] = useState([]);
  const [MainmovieImage, setMovieImage] = useState(null);
  const [Currentpage, setCurrentPage] = useState(0);


  useEffect(() => {
    const page = 1
    fetchMovies(page);
  }, []);


  const loadMoreItems = () => {
    console.log('더보기 버튼 클릭!!!')
    fetchMovies(Currentpage + 1)
  };


  return (
    <>
      <div style={{ width: '100%' }}>
        {/* main Image */}
        {MainmovieImage &&
          <MainImage image={`${IMAGE_BASE_URL}w1280${MainmovieImage.poster_path}`}
            title={MainmovieImage.title}
            overview={MainmovieImage.overview}
          />
        }




        {/* 메인 페이지 우측 버튼 */}
        <div style={{ textAlign: 'center', width: '85%', margin: '1rem auto' }}>
          <Button onClick={() => navigate(1)}> 다음 </Button>
        </div>

        <div style={{ width: '85%', margin: '1rem auto' }}>
          <h2>새로 나온 영화</h2>
          <hr />






          {/* movie grid Card */}
          <Row gutter={[10, 10]}>
            {movies.map(movie => {
              return (
                <React.Fragment key={movie.id} >
                  <AntCard
                    landingPage
                    path={`${IMAGE_BASE_URL}w400${movie.poster_path}`}
                    title={movie.title}
                    movieId={movie.id}
                  />
                </React.Fragment>
              );
            })}
          </Row>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
          <button onClick={loadMoreItems}>더보기</button>
        </div>
      </div>
    </>
  )

  function fetchMovies(page) {
    const endpoint = `${API_URL}popular?api_key=${API_KEY}&language=en-US&page=${page}`; // url 생성


    // console.log('endpoint >>', endpoint)
    fetch(endpoint) // 요청
      .then(response => response.json())
      //.then(response => console.log(response.results))
      .then(response => {

        console.log(response);
        // console.log(response.results[0].poster_path)
        setmovies([...movies, ...response.results]);  //... 페이지가 연속으로 나옴
        setMovieImage(response.results[0]);
        setCurrentPage(response.page);
        console.log(movies);
      });
  }
}

export default Landingpage