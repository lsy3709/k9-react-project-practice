import React, { useReducer } from 'react';

// 1. Reducer 함수 (은행원 역할)
// state: 현재 내 통장 잔고 (현재 상태)
// action: 고객이 제출한 입금/출금 요청서 (어떤 작업을 할지에 대한 정보)
function reducer(state, action) {
  // 요청서(action)의 제목(type)이 무엇인지 확인합니다.
  switch (action.type) {
    case 'INCREMENT':
      // "+1 해줘"라는 요청서면, 기존 잔고(state.value)에 1을 더한 새 결과를 반환합니다.
      return { value: state.value + 1 };
    case 'DECREMENT':
      // "-1 해줘"라는 요청서면, 기존 잔고에서 1을 뺀 새 결과를 반환합니다.
      return { value: state.value - 1 };
    default:
      // 모르는 내용의 요청서가 오면 아무것도 안 하고 기존 잔고를 그대로 돌려줍니다.
      return state;
  }
}

const Counter2 = () => {
  // 2. useReducer 훅 사용하기
  // state: 현재 내 통장 잔고를 보여주는 화면 (초기값은 { value: 0 }으로 시작)
  // dispatch: 은행원(reducer)에게 요청서(action)를 던져주는 전달자 함수
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <div>
      {/* 화면에는 현재 state.value(잔고)를 보여줍니다. */}
      <p>
        현재 카운터 값은 <b>{state.value}</b>입니다.
      </p>

      {/* 버튼을 클릭하면 dispatch(전달자)가 { type: 'INCREMENT' } 라는 
        요청서를 꽉 쥐고 reducer(은행원)에게 달려갑니다.
      */}
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>

      {/* 여기는 { type: 'DECREMENT' } 라는 요청서를 들고 달려가겠죠? */}
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
    </div>
  );
};

export default Counter2;
