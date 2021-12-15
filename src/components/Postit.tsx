/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { css } from '@emotion/react';
// import { AiOutlineCloseSquare, AiOutlineLine } from 'react-icons/ai';
import useAddPostit from '../hooks/useAddPostit';
// import useList from '../hooks/useList';
export type PostitType = {
  id: number;
  title: string;
  content: string;
  hide: boolean;
};
interface SETISPOST {
  setIsPost: React.Dispatch<React.SetStateAction<boolean>>;
}

const PostIt: React.FC<SETISPOST> = ({ setIsPost }) => {
  const addPost = useAddPostit();
  const [title, setTitle] = useState<string>('');
  const [isTitle, setIsTitle] = useState<boolean>(false);
  const [content, setContent] = useState<string>('');
  const [isContent, setIsContent] = useState<boolean>(false);
  const [postitNum, setPostitNum] = useState<number>(1);
  console.log(postitNum);
  const [isPostEnd, setIsPostEnd] = useState<boolean>(false);

  const postit: PostitType = { id: postitNum, title, content, hide: false };
  console.log(postit.id, 'object');
  const titleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const contentHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };
  const addPostHandler = () => {
    if (isTitle && isContent) {
      setPostitNum(() => postitNum + 1);
      setIsPostEnd(true);
      setIsPost(false);
      addPost(postit);
    } else {
      window.alert('제목과 내용을 작성 후 완료 버튼을 눌러주세요');
    }
  };

  return (
    <>
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
          {!isTitle ? (
            <span>
              <input
                type="text"
                placeholder="제목을 입력해주세요"
                onChange={(e: React.ChangeEvent<HTMLInputElement>): void => titleHandler(e)}
              />
              <button onClick={() => setIsTitle(true)}>완료</button>
            </span>
          ) : (
            <span
              css={css`
                cursor: pointer;
              `}
              onClick={() => setIsTitle(false)}
            >
              {title}
            </span>
          )}
          {/* <span>
            <span
              css={css`
                float: right;
                font-size: larger;
                cursor: pointer;
              `}
              // onClick={closeHandler}
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
          </span> */}
        </div>
        <div
          css={css`
            height: 30vh;
          `}
        >
          {!isContent ? (
            <span>
              <input
                type="text"
                placeholder="내용을 입력해주세요"
                onChange={(e: React.ChangeEvent<HTMLInputElement>): void => contentHandler(e)}
              />
              <button onClick={() => setIsContent(true)}>완료</button>
            </span>
          ) : (
            <span
              css={css`
                cursor: pointer;
              `}
              onClick={() => setIsContent(false)}
            >
              {content}
            </span>
          )}
        </div>
        {!isPostEnd ? <button onClick={() => addPostHandler()}>포스트잇작성하기</button> : null}
      </div>
    </>
  );
};

export default PostIt;
