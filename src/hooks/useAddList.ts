import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { addList } from '../modules/list';

export default function useAddList() {
  const dispatch = useDispatch();
  return useCallback((text) => dispatch(addList(text)), [dispatch]);
}
