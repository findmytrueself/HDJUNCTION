import { hidePostIt } from '../modules/lists';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';

export default function useHide() {
  const dispatch = useDispatch();
  return useCallback(
    (isHide) => {
      dispatch(hidePostIt(isHide));
    },
    [dispatch],
  );
}
