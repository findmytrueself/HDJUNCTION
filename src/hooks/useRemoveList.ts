import { removeList } from '../modules/list/actions';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';

export default function useRemoveList() {
  const dispatch = useDispatch();
  return useCallback((id) => dispatch(removeList(id)), [dispatch]);
}
