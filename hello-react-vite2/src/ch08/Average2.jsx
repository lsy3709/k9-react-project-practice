import { useState, useMemo, useCallback, useEffect } from 'react';

const getAverage = (numbers) => {
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b, 0);
  return sum / numbers.length;
};

const Average2 = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  // onChange: 컴포넌트 첫 렌더링 시 딱 1번만 생성
  const onChange = useCallback((e) => {
    console.log('onChange 실행');
    setNumber(e.target.value);
  }, []);

  // 🔴 함수 "생성" 감지 (참조 변경)
  useEffect(() => {
    console.log('onChange 함수 생성됨');
  }, [onChange]);

  useEffect(() => {
    console.log('onInsert 함수 생성됨');
  }, [onInsert]);

  // onInsert: number 또는 list가 변경될 때만 새로운 함수 생성
  const onInsert = useCallback(() => {
    console.log('onInsert 실행');
    const nextList = list.concat(parseInt(number, 10));
    setList(nextList);
    setNumber('');
  }, [number, list]);

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} placeholder="숫자 입력" />
      <button onClick={onInsert}>추가</button>
      <ul>
        {list.map((val, i) => (
          <li key={i}>{val}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {avg}
      </div>
    </div>
  );
};

export default Average2;
