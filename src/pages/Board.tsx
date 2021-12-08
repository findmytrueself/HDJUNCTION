/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import BoardList from '../components/board/BoardList';
import PostIt from '../components/board/Postit';
const Board = () => {
  return (
    <>
      <div
        css={css`
          border: solid;
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
