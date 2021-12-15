/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { AiOutlineCloseSquare, AiOutlineLine } from 'react-icons/ai';
import { PostitType } from './Postit';
import useHide from '../hooks/useHide';
import useList from '../hooks/useList';
import useDelete from '../hooks/useDelete';
interface Iprops {
  postit: Array<PostitType>;
}
// interface CSSprops {
//   listHide: boolean;
// }
const PostitView: React.FC<Iprops> = ({ postit }) => {
  const [isHide, setIsHide] = useState<boolean>(false);
  const [idState, setIdState] = useState<number>(0);
  const hide = useHide();
  const close = useDelete();
  const list = useList();
  const hideHandler = () => {
    setIsHide(!isHide);
  };
  const closeHandler = () => {
    setIdState(postit[0].id);
  };
  useEffect(() => {
    hide(isHide);
  }, [isHide]);
  useEffect(() => {
    close(idState);
  }, [idState]);
  return (
    <>
      {list[0].postit.length !== 0 ? (
        <div
          css={css`
            border: solid;
            border-width: thin;
            width: 25vw;
          `}
        >
          <div
            css={css`
              background: #e0e0e0;
            `}
          >
            <span>{postit.length > 0 && postit[0].title.length > 0 ? postit[0].title : null}</span>
            <span>
              <span
                css={css`
                  float: right;
                  font-size: larger;
                  cursor: pointer;
                `}
                onClick={closeHandler}
              >
                <AiOutlineCloseSquare />
              </span>
              <span
                css={css`
                  float: right;
                  font-size: large;
                  cursor: pointer;
                `}
                onClick={hideHandler}
              >
                <AiOutlineLine />
              </span>
            </span>
          </div>
          {list[0].postit[0]?.hide ? (
            <Div
              css={css`
                display: none;
              `}
            >
              {postit.length > 0 && postit[0].content.length > 0 ? postit[0].content : null}
            </Div>
          ) : (
            <Div>{postit.length > 0 && postit[0].content.length > 0 ? postit[0].content : null}</Div>
          )}
        </div>
      ) : null}
    </>
  );
};

export default PostitView;

const Div = styled.div`
  height: 30vh;
`;
