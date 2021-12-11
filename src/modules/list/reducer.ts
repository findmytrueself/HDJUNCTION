import { createReducer } from 'typesafe-actions';
import { ListAction, ListState } from './types';
import { ADD_LIST, REMOVE_LIST } from './actions';

const initialState: ListState = [{ id: 0, text: '' }];

const reducer = createReducer<ListState, ListAction>(initialState, {
  [ADD_LIST]: (state, { payload: text }) =>
    state.concat({
      id: Math.max(...state.map((list) => list.id)) + 1,
      text,
    }),
  [REMOVE_LIST]: (state, { payload: id }) => state.filter((list) => list.id !== id),
});

export default reducer;
