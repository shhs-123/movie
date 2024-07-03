import React from 'react';
import { Col } from 'antd';

const GridCards = (props) => {
  /*
  xs : 0 ~575px
  sm : 576 ~ 767px
  md : 768 ~ 991px
  lg : 992 ~ 1199px
  */

  // console.log(props)
  // console.log(props.landingPage)



  if (props.landingPage) {
    //// [lendingPage] 처리 =============================
    return (
      <Col lg={4} md={6} sm={12} xs={24}>
        <div>
          {/* 하단 /movie  -> 이동URL*/}
          <a href={`/movie/${props.movieId}`}>
            <img
              style={{ width: '100%' }}
              src={props.path}
              alt={props.title}
            />
          </a>
        </div>
      </Col>
    )
  } else {
    //// [Detail] 처리 =============================
    return (
      <Col lg={4} md={6} sm={12} xs={24}>
        <div>
          <img
            style={{ width: '100%' }}
            src={props.path}
            alt={props.castName}
          />
        </div>
      </Col>
    )
  }



  //  span={4}>  -> 한칸에 4개를 쓴다.? 컬럼하나가 몇칸씩 쓴다?

}

export default GridCards