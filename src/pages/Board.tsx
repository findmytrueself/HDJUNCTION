/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import BoardList from '../components/BoardList';
import PostItBoard from '../components/PostitBoard';

export interface ListProps {
  id: number;
  text: string;
}

const Board: React.FC = () => {
  return (
    <>
      <div
        css={css`
          background: lightgray;
          text-align: center;
        `}
      >
        Online Post-it
      </div>
      <div
        css={css`
          display: flex;
        `}
      >
        <BoardList />
        <div
          css={css`
            width: 80vw;
            height: 100vh;
          `}
        >
          <PostItBoard />
        </div>
      </div>
    </>
  );
};

export default Board;
