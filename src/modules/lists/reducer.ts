import { createReducer } from 'typesafe-actions';
import { ListsAction, ListsState } from './types';
import { ADD_LISTS, REMOVE_LISTS, UPDATE_LISTS } from './actions';

export const initialState: ListsState = [{ id: 0, text: '' }];
const reducer = createReducer<ListsState, ListsAction>(initialState, {
  [ADD_LISTS]: (state, { payload: text }) =>
    state.concat({
      id: Math.max(...state.map((list) => list.id)) + 1,
      text,
    }),
  [REMOVE_LISTS]: (state, { payload: id }) => state.filter((list) => list.id !== id),
  [UPDATE_LISTS]: (state, action) => {
    let temp: Array<{ id: number; text: string }> = [];
    state.slice(1).map((el) => {
      if (el.id === action.payload.id) {
        el.text = action.payload.text;
        temp = [...state];
      }
    });
    return temp;
  },
});
export default reducer;
