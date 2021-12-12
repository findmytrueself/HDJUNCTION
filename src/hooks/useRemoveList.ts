import { removeLists } from '../modules/lists/actions';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';

export default function useRemoveList() {
  const dispatch = useDispatch();
  return useCallback((id) => dispatch(removeLists(id)), [dispatch]);
}
