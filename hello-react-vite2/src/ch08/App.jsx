import React, { useState } from 'react';
import Counter from './Counter';
import Ex1 from './Ex1';
import Ex2 from './Ex2';
import Info from './Info';
import Ex3 from './Ex3';
import Ex4 from './Ex4';
import Counter2 from './Counter2';
import Ex5 from './Ex5';
import Ex6 from './Ex6';
import Average from './Average';
import Ex7 from './Ex7';
import Average2 from './Average2';
import Ex8 from './Ex8';
import Average3 from './Average3';
import Ex9 from './Ex9';
import Ex10 from './Ex10';
import Info2 from './Info2';
import Ex11 from './Ex11';

const App = () => {
  //Ex4 에서, 언마운트 효과 내기를 위한 상태 추가.
  const [isShowing, setIsShowing] = useState(true);

  return (
    <div>
      <h1>ch8 hooks 특수 함수 알아보기</h1>
      <h2>useState 기본 예시 연습</h2>
      <Counter></Counter>
      <br />
      <h3>실습1 </h3>
      <p>
        버튼을 클릭하면 숫자가 2씩 증가하고, 다른 버튼을 클릭하면 0으로
        초기화되는 컴포넌트를 만들어 보세요
      </p>
      <Ex1></Ex1>
      <h3>실습2 </h3>
      <p>
        이름과 나이를 입력받는 폼 컴포넌트를 만드세요. 각각 별도의 state로
        관리하고, 현재 입력된 값을 화면에 표시하세요.
      </p>
      <Ex2></Ex2>
      <br />
      <h2>useEffect 기본 예시 연습</h2>
      <Info></Info>
      <br />
      <h3>실습3 </h3>
      <p>
        컴포넌트가 처음 마운트될 때 딱 한 번 "컴포넌트가 화면에 나타났습니다!"
        를 콘솔에 출력하는 컴포넌트를 만드세요
      </p>
      <Ex3></Ex3>
      <br />
      <h3>실습4 </h3>
      <p>
        숫자를 1초마다 자동으로 1씩 증가시키는 타이머 컴포넌트를 만드세요.
        컴포넌트가 언마운트될 때 타이머가 정리(cleanup)되어야 합니다. 힌트 -
        setInterval(콜백함수, 특정시간(ms)), 1000ms = 1초 힌트2 -
        clearInterval(interval); // 언마운트 시 타이머 정리
      </p>
      <h3>Ex4 언마운트 테스트 </h3>
      <button onClick={() => setIsShowing(!isShowing)}>
        {isShowing ? '타이머 컴포넌트 숨기기' : '타이머 컴포넌트 보이기'}
      </button>
      <hr />
      {isShowing && <Ex4 />}
      <br />
      <h2>useReducer 기본 예시 연습</h2>
      <Counter2 />
      <br />
      <h3>실습5 </h3>
      <p>
        useReducer를 사용하여 INCREMENT, DECREMENT, RESET 세 가지 action을
        처리하는 카운터를 만드세요. RESET은 값을 0으로 초기화합니다.
      </p>
      <Ex5></Ex5>
      <br />
      <hr />
      <h3>실습6 </h3>
      <p>
        useReducer로 간단한 To-Do 리스트를 만드세요. ADD action으로 항목을
        추가하고, REMOVE action으로 항목을 삭제하세요.
      </p>
      <Ex6></Ex6>

      <br />
      <h2>useMemo 기본 예시 연습</h2>
      <Average></Average>
      <br />
      <hr />
      <h3>실습7 </h3>
      <p>
        숫자 목록의 최댓값을 useMemo로 계산하는 컴포넌트를 만드세요. 숫자를
        추가할 때만 최댓값이 재계산되어야 합니다.
      </p>
      <Ex7></Ex7>
      <br />
      <h2>useCallback 기본 예시 연습</h2>
      <Average2></Average2>
      <br />
      <hr />
      <hr />
      <h3>실습8 </h3>
      <p>
        useCallback을 이용해서 handleIncrease, handleDecrease, handleReset
        함수를 메모이제이션하는 카운터 컴포넌트를 만드세요. Counter 를 참고해서,
        증가, 감소, 리셋 함수를 useCallback 이용해서, 만들기
      </p>
      <Ex8></Ex8>
      <br />
      <h2>useRef 기본 예시 연습</h2>
      <Average3></Average3>
      <br />
      <hr />
      <hr />
      <h3>실습9 </h3>
      <p>
        텍스트를 입력하고 "확인" 버튼을 누르면 alert으로 보여주고, input에
        자동으로 포커스가 되돌아오는 컴포넌트를 만드세요. Average3 ,참고
      </p>
      <Ex9></Ex9>
      <br />
      <hr />
      <h3>실습10 </h3>
      <p>
        useRef로 렌더링 횟수를 추적하는 컴포넌트를 만드세요. 버튼을 클릭할
        때마다 state가 변경되고, 콘솔에 현재까지 렌더링된 횟수가 출력되어야
        합니다. Average3 ,참고
      </p>
      <Ex10></Ex10>
      <br />
      <h2>커스텀 훅스, 우리가 만든 함수 이름 : useInputs 기본 예시 연습</h2>
      <Info2></Info2>
      <br />
      <hr />
      <h3>실습11 </h3>
      <p>
        useToggle 커스텀 Hook을 만드세요. boolean 값과 값을 토글하는 함수를
        반환해야 합니다.
      </p>
      <Ex11></Ex11>
      <br />
    </div>
  );
};

export default App;
