/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import BoardList from '../components/BoardList';
import PostIt from '../components/Postit';
const Board = () => {
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
        <PostIt />
      </div>
    </>
  );
};

export default Board;
