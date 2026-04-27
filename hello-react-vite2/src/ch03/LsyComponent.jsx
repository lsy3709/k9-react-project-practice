import React from 'react';

const LsyComponent = ({ name = '기본이름', children, favoriteFood }) => {
  return (
    <div>
      안녕하세요. 이름은 : {name}, <br />
      좋아하는 음식은 : {favoriteFood} <br />
      test로 넘겨 받은 children : {children} <br />
    </div>
  );
};

// 클래스 형 컴포넌트에서, 옛날에 사용했던 레거시 코드.
// LsyComponent.defaultProps = { name: '기본 이름' };

export default LsyComponent;
