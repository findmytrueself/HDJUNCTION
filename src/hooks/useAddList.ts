import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { addList } from '../modules/lists';

export default function useAddList() {
  const dispatch = useDispatch();
  return useCallback((title) => dispatch(addList(title)), [dispatch]);
}
