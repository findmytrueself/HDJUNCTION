// import { Rootstate } from './../modules/index';
import { selectList } from '../modules/list';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';

export default function useSelectList() {
  const dispatch = useDispatch();

  return useCallback(
    (list) => {
      dispatch(selectList(list));
    },
    [dispatch],
  );
}
