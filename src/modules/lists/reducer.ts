import { createReducer } from 'typesafe-actions';
import { ListsAction, ListsState } from './types';
import { ADD_LIST, REMOVE_LIST } from './actions';

export const initialState: ListsState = [{ id: 0, text: '' }];
const reducer = createReducer<ListsState, ListsAction>(initialState, {
  [ADD_LIST]: (state, { payload: text }) =>
    state.concat({
      id: Math.max(...state.map((list) => list.id)) + 1,
      text,
    }),
  [REMOVE_LIST]: (state, { payload: id }) => state.filter((list) => list.id !== id),
});
export default reducer;
