import React from 'react'


const Test = (props) => {
  console.log('props.hello', props.hello)
  return <div>Test Componet {props.hello}</div>
}


function Items() {
  return (
    <>
      <div>상품정보</div>
      <div />

      <div></div>

      <div>{false}</div>

      <div>{null}</div>

      <div>{undefined}</div>

      <div>{true}</div>

      {/* ----[조건부 랜더링]--- */}
      {true && '하이'}
      {true && true}
      {true && <Test hello='쉬고 싶다' />}
      {false && <Test />}
      {0 && <Test />}
      {<Test /> && false}


    </>
  )
}

export default Items