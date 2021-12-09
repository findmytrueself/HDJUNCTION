/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
const PostIt: React.FC = () => {
  return (
    <>
      <div
        css={css`
          width: 80vw;
          height: 100vh;
        `}
      >
        <h1>Awesome Board</h1>
        <div>Postit Content</div>
      </div>
    </>
  );
};

export default PostIt;
