import React, { useReducer } from 'react';

// 초기값, 객체에 정의,
const initialState = {
  // 기본 배열,
  names: [
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' },
  ],
  // 입력값을 받을 변수
  inputText: '',
  // 텍스트 새로 추가 시, 사용할 id
  nextId: 5,
  // 삭제 한 요소를 가지는 배열.
  deletedItems: [],
};

// 2. Reducer 함수 생성.
function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return { ...state, inputText: action.payload };
  }
}

const Ex6 = () => {
  //3. useReducer 정의해서, dispatch 이용해서, 이벤트 처리를 한다. (중앙 집중형)
  const [state, dispatch] = useReducer(reducer, initialState);

  //4. state 객체에 있는 내용을 화면에서 꺼내서 이용하기 쉽게 꺼내는 작업. 구조분해할당.
  const { names, inputText, nextId, deletedItems } = state;

  //5. 이벤트 핸들러들이 올 예정.
  const onChange = (e) => {
    dispatch({ type: 'CHANGE_INPUT', payload: e.target.value });
  };
  // 추가 이벤트 핸들러 더 있음. 추가 할 예정.

  //6. 출력용 배열 , names 를 그리기 작업 : 6장 컴포넌트 반복, 내장 함수, map 이용했음.
  const namesList = names.map((name) => (
    <li
      key={name.id}
      //   onDoubleClick={() => onRemove(name.id)}
      //   // 수정 순서3
      //   onContextMenu={() => rightClick(name.id, name.text)}
    >
      {name.text}
    </li>
  ));

  return (
    <>
      <input
        value={inputText}
        onChange={onChange}
        placeholder="항목을 입력하세요"
      />
      {/* <button onClick={onClick}>추가</button> */}

      {/* 오름차순, 내림차순 정렬 기능
    순서3 */}
      {/* <button onClick={sortAsscending}>오름차순 정렬</button>
      <button onClick={sortDescending}>내림차순 정렬</button> */}
      <ul>{namesList}</ul>
      {/* // 복구 기능 구현
        // 순서3 */}
      <h2>삭제한 요소 목록 출력</h2>
      {deletedItems.length > 0 && (
        <ul>
          {deletedItems.map((item) => (
            <li key={item.id}>
              {item.text}
              {/* <button onClick={() => restoreItem(item.id)}>복구</button> */}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Ex6;
