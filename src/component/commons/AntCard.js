import React from 'react';
import { Col, Card } from 'antd';




const AntCard = (props) => {

  const { Meta } = Card;


  if (props.landingPage) {
    //// [lendingPage] 처리 =============================
    return (
      <Col lg={4} md={6} sm={12} xs={24}>
        <div>
          {/* 하단 /movie  -> 이동URL*/}
          <a href={`/movie/${props.movieId}`}>
            <Card
              hoverable
              style={{ width: '100%' }}
              cover={
                <img
                  src={props.path}
                  alt={props.title}
                />}
            >
              <Meta title={props.title} />
            </Card>
          </a>
        </div>
      </Col>
    )
  } else {
    //// [Detail] 처리 =============================
    return (
      <Col lg={4} md={6} sm={12} xs={24}>
        <div>
          {/* 하단 /movie  -> 이동URL*/}
          <a href={`/movie/${props.movieId}`}>
            <Card
              hoverable
              style={{ width: '100%' }}
              cover={
                <img
                  src={props.path}
                  alt={props.castName}
                />}
            >
              <Meta title={props.castName} />
            </Card>
          </a>
        </div>
      </Col>
    )
  }

}


/* 
[과제 _ 디테일 파일]
배우 목록 , 제작진 목록
    제작진 목록
*/

export default AntCard;