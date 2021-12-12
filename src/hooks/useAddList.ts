import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { addLists } from '../modules/lists';

export default function useAddList() {
  const dispatch = useDispatch();
  return useCallback((title) => dispatch(addLists(title)), [dispatch]);
}
