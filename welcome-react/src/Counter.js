import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    // state의 초깃값 설정
    this.state = {
      number: 0,
      fixedNumber: 0,
    };
  }

  render() {
    const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회합니다.

    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지않는값 : {fixedNumber}</h2>
        <button
          // onclick을 통해 버튼이 클릭되었을 때 호출할 함수 지정
          onClick={() => {
            // this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다.
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
