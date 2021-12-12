/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useRef, useState } from 'react';
import useLists from '../hooks/useLists';
import useList from '../hooks/useList';
// import useUpdate from '../hooks/useUpdate';
import { AiOutlineCloseSquare, AiOutlineLine } from 'react-icons/ai';
import useUpdate from '../hooks/useUpdate';
const PostIt: React.FC = () => {
  const lists = useLists();
  const list = useList();
  const update = useUpdate();
  const ref = useRef<HTMLDivElement>(null);
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [updateInput, setUpdateInput] = useState<string>('');
  const updateInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdateInput(e.target.value);
  };
  const updateHandler = async () => {
    setIsUpdate(!isUpdate);
    if (isUpdate) {
      const temp = await { id: list[0].id, text: updateInput };
      update(temp);
    }
  };

  const hideHandler = () => {
    console.log('mini');
  };
  const closeHandler = () => {
    console.log('close');
  };
  return (
    <>
      {lists.length > 1 ? (
        <div>
          {!isUpdate ? (
            <span
              css={css`
                font-size: 2em;
                cursor: pointer;
              `}
              ref={ref}
              onClick={updateHandler}
            >
              {list[0].text}
            </span>
          ) : (
            <div>
              <input type="text" onChange={(e) => updateInputHandler(e)} />
              <button onClick={updateHandler}>완료</button>
            </div>
          )}
        </div>
      ) : null}
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
          title
          <span />
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
        </div>
        <div
          css={css`
            height: 30vh;
          `}
        >
          content
        </div>
      </div>
    </>
  );
};

export default PostIt;
