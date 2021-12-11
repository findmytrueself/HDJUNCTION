/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import useLists from '../hooks/useLists';
const PostIt: React.FC = () => {
  const lists = useLists();
  console.log(lists);
  return (
    <>
      <div
        css={css`
          width: 80vw;
          height: 100vh;
        `}
      >
        <h1>{lists[0].text}</h1>
        <div>Postit Content</div>
      </div>
    </>
  );
};

export default PostIt;
