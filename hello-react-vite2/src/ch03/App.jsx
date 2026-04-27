import React from 'react';
import MyComponent from './MyComponent';
import LsyComponent from './LsyComponent';
import Counter from './Counter';

const App = () => {
  return (
    <div>
      <h1>우리가 ch03에서 만든 App.js 파일</h1>
      <MyComponent name="이상용">children 매개변수 전달 테스트 </MyComponent>
      <h2>본인 소개 컴포넌트 출력해보기. </h2>
      <LsyComponent favoriteFood="한식 종류">
        이자리가 children 자리입니다. : 샘플값을 넣기.
      </LsyComponent>
      <h2>
        클래스형 컴포넌트이고, setState 함수를 이용해서, 상태에 따라
        업데이트(다시그리기)
      </h2>
      <Counter></Counter>
    </div>
  );
};

export default App;
