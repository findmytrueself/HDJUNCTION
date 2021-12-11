/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import { ListProps } from '../pages/Board';
import useAddList from '../hooks/useAddList';
import useRemoveList from '../hooks/useRemoveList';
import useLists from '../hooks/useLists';
const BoardList: React.FC = () => {
  const [isInput, setIsInput] = useState<boolean>(false);
  const [input, setInput] = useState<string>('');
  // const [list, setList] = useState<ListProps[]>([]);
  const lists = useLists();
  const addList = useAddList();
  const removeList = useRemoveList();
  const listAddHandler = () => {
    setIsInput(true);
  };
  const listSubmitHandler = () => {
    if (input.length > 0) {
      addList(input);
      setIsInput(false);
    } else {
      window.alert('1글자 이상 입력해주세요.');
    }
  };
  const listRemoveHandler = (list: ListProps) => {
    removeList(list.id);
  };
  useEffect(() => {
    !isInput ? setInput('') : null;
  }, [listSubmitHandler]);
  return (
    <>
      <div
        css={css`
          background: #e0e0e0;
          width: 20vw;
          height: 100vh;
        `}
      >
        <ul>
          {lists.map((list) =>
            list.text.length > 0 ? (
              <div key={list.id}>
                <li>
                  {list.text}
                  <button onClick={() => listRemoveHandler(list)}>삭제하기</button>
                </li>
              </div>
            ) : null,
          )}
          {isInput ? (
            <div>
              <input onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setInput(e.target.value)} />
              <button onClick={listSubmitHandler}>리스트추가하기</button>
            </div>
          ) : null}
          {!isInput ? <button onClick={listAddHandler}>+</button> : null}
        </ul>
      </div>
    </>
  );
};

export default BoardList;
