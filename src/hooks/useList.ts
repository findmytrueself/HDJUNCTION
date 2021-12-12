import { useSelector } from 'react-redux';
import { Rootstate } from '../modules';

export default function useList() {
  const list = useSelector((state: Rootstate) => state.list);
  return list;
}
