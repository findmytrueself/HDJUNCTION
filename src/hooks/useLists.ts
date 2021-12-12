import { useSelector } from 'react-redux';
import { Rootstate } from '../modules';

export default function useLists() {
  const lists = useSelector((state: Rootstate) => state.lists);
  return lists;
}
