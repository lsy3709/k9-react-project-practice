import React from 'react';
import useLocalStorage from './useLocalStorage';

const Ex12 = () => {
  // 커스텀 훅스 이용하기.
  const [name, setName] = useLocalStorage('name', '');
  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="이름 입력 해주세요. 새로고침 후에도, 데이터가 남아 있습니다. "
      />
      <p>저장된 이름 : {name}</p>
    </div>
  );
};

export default Ex12;
