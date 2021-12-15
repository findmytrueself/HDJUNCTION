import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { deletePostIt } from '../modules/list';

export default function useDelete() {
  const dispatch = useDispatch();
  return useCallback((id) => dispatch(deletePostIt(id)), [dispatch]);
}
