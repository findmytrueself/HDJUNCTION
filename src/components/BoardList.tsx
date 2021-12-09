/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';

interface ListProps {
  id: number;
  text: string;
}

const BoardList: React.FC = () => {
  const [isInput, setIsInput] = useState<boolean>(false);
  const [input, setInput] = useState<string>('');
  const [list, setList] = useState<ListProps[]>([]);
  const listAddHandler = () => {
    setIsInput(true);
  };
  const listSubmitHandler = () => {
    if (input.length > 0) {
      const tempList = { id: Math.random(), text: input };
      setList((prevList) => [...prevList, tempList]);
      setIsInput(false);
    } else {
      window.alert('1글자 이상 입력해주세요.');
    }
  };
  const listRemoveHandler = (el: ListProps) => {
    setList(list.filter((item) => el.id !== item.id));
  };
  useEffect(() => {
    !isInput ? setInput('') : null;
  }, [listSubmitHandler]);
  return (
    <>
      <div
        css={css`
          background: #e0e0e0;
          width: 20vw;
          height: 100vh;
        `}
      >
        <ul>
          {list.map((el) => (
            <div key={el.id}>
              <li>{el.text}</li>
              <button onClick={() => listRemoveHandler(el)}>삭제하기</button>
            </div>
          ))}
          {isInput ? (
            <div>
              <input onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setInput(e.target.value)} />
              <button onClick={listSubmitHandler}>리스트추가하기</button>
            </div>
          ) : null}
          {!isInput ? <button onClick={listAddHandler}>+</button> : null}
        </ul>
      </div>
    </>
  );
};

export default BoardList;
