/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useRef, useState } from 'react';
import useLists from '../hooks/useLists';
import useList from '../hooks/useList';
import useUpdate from '../hooks/useUpdate';
import PostIt from './PostIt';
import PostitView from './PostitView';

const PostItBoard: React.FC = () => {
  const lists = useLists();
  // console.log(lists);
  const list = useList();
  const update = useUpdate();
  const ref = useRef<HTMLDivElement>(null);
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [isPost, setIsPost] = useState<boolean>(false);
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
  const postHandler = () => {
    if (list[0].text.length === 0) {
      setIsPost(false);
      window.alert('왼쪽의 보드를 먼저 추가하고 선택해주세요');
    }
    setIsPost(true);
  };

  return (
    <div
      css={css`
        height: 100vh;
      `}
      onDoubleClick={postHandler}
    >
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
      <div>
        <div>{isPost && list[0].text.length !== 0 ? <PostIt setIsPost={setIsPost} /> : null}</div>
        <div>
          {/* {list[0].postit.map((el) =>  <PostitView key={el.id} postit={el.postit}/> : null))} */}
          {lists
            .slice(1)
            .map((el) => (el.postit.length !== 0 && el.postit.length !== 0 ? <PostitView key={el.id} postit={el.postit} /> : null))}
        </div>
      </div>
    </div>
  );
};

export default PostItBoard;
