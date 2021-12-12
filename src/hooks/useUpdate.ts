import { updateList } from '../modules/list';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';

export default function useUpdate() {
  const dispatch = useDispatch();
  return useCallback(
    (list) => {
      dispatch(updateList(list.text));
    },
    [dispatch],
  );
}
