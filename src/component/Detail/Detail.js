import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { API_KEY, API_URL, IMAGE_BASE_URL } from '../Config';
import MainImage from '../Landingpage/Section/Mainimage';
import MovieInfo from './movieInfo';
import { Row, Button, Divider } from 'antd';
import AntCard from '../commons/AntCard';
// import { Divider } from 'antd';


function Detail() {
  const navigate = useNavigate();
  const { movieId } = useParams();
  console.log('movieId >>', movieId);

  //// [state] ==============================
  const [Movie, setMovie] = useState({});
  const [Casts, setCasts] = useState([]);
  const [Crews, setCrews] = useState([]);
  const [ActorToggle, setActorToggle] = useState(false);
  const [CrewToggle, setCrewToggle] = useState(false);


  useEffect(() => {
    console.log('페이지가 로드되면, 실행됩니다!');

    //// [특정 영화 정보] URL
    let endpointInfo = `${API_URL}${movieId}?api_key=${API_KEY}`;
    console.log(endpointInfo);

    //// [출연진] URL
    let endpointCrew = `${API_URL}${movieId}/credits?api_key=${API_KEY}`;
    console.log('출연진', endpointCrew);

    //// [특정 영화 정보] 영화 아이디로 정보 요청
    fetch(endpointInfo)
      .then(response => response.json())
      .then(response => {
        setMovie(response);
      });

    //// [출연진] 영화 배우 정보 요청
    fetch(endpointCrew)
      .then(response => response.json())
      .then(obj => {
        console.log('ok', obj);
        setCasts(obj.cast);
        setCrews(obj.crew);
        console.log('obj.crew >> ', obj.crew)
      });

  }, [movieId]);

  ///// 버튼 핸들러 ===============================
  // const toggleActorView = () => {
  //   setActorToggle(!ActorToggle);
  //   setCrewToggle(false);
  // };

  // const toggleCrewView = () => {
  //   setCrewToggle(!CrewToggle);
  //   setActorToggle(false);
  // };



  // 쌤 버전
  function toggleActorView() {
    // console.log('버튼클릭!!! ')
    setActorToggle(!ActorToggle)
    // console.log('ActorToggle >>', ActorToggle)
  }


  function toggleCrewView() {
    setCrewToggle(!CrewToggle)

  }


  return (
    <>
      {/* Header */}
      {Movie &&
        <MainImage
          image={`${IMAGE_BASE_URL}w1280${Movie.poster_path}`}
          title={Movie.title}
          // (property) overview: any
          overview={Movie.overview}
        />}

      {/*영화 목록 버튼  */}
      <div style={{ textAlign: 'center', margin: '60px' }}>
        <Button onClick={() => navigate(-1)}> 영화 목록</Button>
      </div>

      {/* Body */}
      <div style={{ width: '85%', margin: '20px auto' }}>
        {/* Movie Info - 영화정보*/}
        <MovieInfo movie={Movie} />

        <br />

        {/* Actors Grid - 배우 이미지 생성 */}
        <div style={{ textAlign: 'center', margin: '40px 0' }}>
          <Button
            onClick={toggleActorView}
            style={{ marginRight: '20px' }}
            type={ActorToggle ? 'primary' : 'dashed'}
          > 배우 목록 </Button>
          <Button
            onClick={toggleCrewView}
            type={CrewToggle ? 'primary' : 'dashed'}
          > 제작진 목록 </Button>
        </div>


        {ActorToggle &&
          <>
            <Divider
              // dashed
              // orientation='left'
              // orientationMargin={500}
              style={{ bordercolor: '#ddd' }}

            >배우 목록</Divider>
            <Row gutter={[10, 10]}>
              {Casts.map(cast => (     // 왜 여기는 cast?
                <React.Fragment key={cast.id}>
                  {cast.profile_path &&
                    <AntCard
                      path={`${IMAGE_BASE_URL}w400${cast.profile_path}`}
                      castName={cast.name}
                    />}
                </React.Fragment>
              ))}
            </Row>
          </>
        }

        {CrewToggle &&
          <>
            <Divider style={{ bordercolor: '#ddd' }} >제작진 목록</Divider>
            <Row gutter={[10, 10]}>

              {Crews.map((crew, index) => (  // 왜 여기는 crew, index ?
                <React.Fragment key={index}>
                  {crew.profile_path &&
                    <AntCard
                      path={`${IMAGE_BASE_URL}w400${crew.profile_path}`}
                      castName={crew.name}
                    />}
                </React.Fragment>
              ))}
            </Row>
          </>
        }
      </div>
    </>
  );
}

export default Detail;
