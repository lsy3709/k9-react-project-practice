import React, { useState } from 'react';
import useInputs from './useInputs';

const Info2 = () => {
  const [state, onChange] = useInputs({ name: '', nickname: '' });
  // 객체에 담겨진 내용을 화면에서, 쉽게 이용하기 위해서, 구조분해할당.
  const { name, nickname } = state;
  return (
    <div>
      <input name="name" value={name} onChange={onChange} placeholder="이름" />
      <input
        name="nickname"
        value={nickname}
        onChange={onChange}
        placeholder="닉네임"
      />
      <div>
        <b>이름:</b> {name}
      </div>
      <div>
        <b>닉네임:</b> {nickname}
      </div>
    </div>
  );
};

export default Info2;
