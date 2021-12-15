import { PostitType } from './../../components/PostIt';
import { createReducer } from 'typesafe-actions';
import { ListsAction, ListsState } from './types';
import { ADD_LISTS, REMOVE_LISTS, UPDATE_LISTS, ADD_POSTIT, UPDATE_POSTIT } from './actions';
import { HIDE_POSTIT } from '.';

export const initialState: ListsState = [{ id: 0, text: '', postit: [] }];
const reducer = createReducer<ListsState, ListsAction>(initialState, {
  [ADD_LISTS]: (state, { payload: text }) => {
    const temp: Array<PostitType> = [];
    return state.concat({
      id: Math.max(...state.map((list) => list.id)) + 1,
      text,
      postit: temp,
    });
  },
  [REMOVE_LISTS]: (state, { payload: id }) => state.filter((list) => list.id !== id),
  [UPDATE_LISTS]: (state, action) => {
    let temp: Array<{ id: number; text: string; postit: Array<PostitType> }> = [];
    state.slice(1).map((el) => {
      if (el.id === action.payload.id) {
        el.text = action.payload.text;
        temp = [...state];
      }
    });
    return temp;
  },
  [ADD_POSTIT]: (state, action) =>
    state.map((el) => {
      // console.log(state[0].postit, 'state');
      state[0].postit.push(action.payload);
      const temp = state[0].postit.slice();
      return Object.assign({}, { ...el }, { postit: temp });
    }),
  [UPDATE_POSTIT]: (state, action) =>
    state.map((el) => {
      console.log(action.payload.id);
      const temp = state[0].postit;
      console.log(temp);
      return Object.assign({}, { ...el }, {});
    }),
  [HIDE_POSTIT]: (state, action) =>
    state.map((el) => {
      console.log(action);
      return Object.assign({}, el);
    }),
});
export default reducer;
