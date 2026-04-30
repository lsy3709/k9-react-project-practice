import React from 'react';
import useToggle from './useToggle';

const Ex11 = () => {
  const [isOn, toggle] = useToggle(false);

  return (
    <div>
      <p>현재 상태 : {isOn ? 'On 🟢' : 'OFF 🔴'}</p>
      <button onClick={toggle}>토글</button>
    </div>
  );
};

export default Ex11;
