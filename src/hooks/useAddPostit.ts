import { addPostIt } from './../modules/lists/actions';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';

export default function useAddPostit() {
  const dispatch = useDispatch();
  return useCallback(
    (postit) => {
      dispatch(addPostIt(postit));
    },
    [dispatch],
  );
}
