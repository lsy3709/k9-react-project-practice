import React, { Component } from 'react';

class Counter extends Component {
  state = { number: 0, fixedNumber: 0 };

  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>상태에 따라 변경되는 number : {number}</h1>
        <h2>변경되지 않는 값 fixedNumber : {fixedNumber}</h2>
        <button
          onClick={() => {
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
