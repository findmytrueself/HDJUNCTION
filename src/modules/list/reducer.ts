import { createReducer } from 'typesafe-actions';
import { ListAction, ListState } from './types';
import { SELECT_LIST, UPDATE_LIST } from './actions';

export const initialState: ListState = [{ id: 0, text: '' }];

const reducer = createReducer<ListState, ListAction>(initialState, {
  [SELECT_LIST]: (state, { payload: { id, text } }) => state.map((list) => Object.assign({}, list, { id, text })),
  [UPDATE_LIST]: (state, action) => state.map((el) => Object.assign({}, el, { text: action.payload })),
});
export default reducer;
