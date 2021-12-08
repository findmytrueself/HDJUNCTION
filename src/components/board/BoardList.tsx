/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { css } from '@emotion/react';

const BoardList = () => {
  //   const [input, setInput] = useState<HTMLInputElement | null>(null);
  // const [list, setList] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');
  console.log(input);
  const listAddHandler = () => {
    console.log('click');
  };
  return (
    <>
      <div
        css={css`
          border: solid;
          background: #e0e0e0;
          width: 20vw;
          height: 100vh;
        `}
      >
        <ul>
          {/* {list.map((el) => console.log(el))} */}
          <input onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setInput(e.target.value)} />
          <button onClick={listAddHandler}>+</button>
        </ul>
      </div>
    </>
  );
};

export default BoardList;
