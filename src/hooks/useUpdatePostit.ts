import { updateList } from '../modules/list';
import { updateLists } from '../modules/lists';
import { updatePostIt } from '../modules/lists';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';

export default function useUpdate() {
  const dispatch = useDispatch();
  return useCallback(
    (list) => {
      console.log(list);
      dispatch(updateList(list.text));
      dispatch(updateLists(list));
      dispatch(updatePostIt(list));
    },
    [dispatch],
  );
}
