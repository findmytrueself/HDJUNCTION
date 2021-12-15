import { createReducer } from 'typesafe-actions';
import { ListAction, ListState } from './types';
import { SELECT_LIST, UPDATE_LIST, ADD_POSTIT, UPDATE_POSTIT, DELETE_POSTIT } from './actions';
import { HIDE_POSTIT } from '../lists';

export const initialState: ListState = [{ id: 0, text: '', postit: [] }];

const reducer = createReducer<ListState, ListAction>(initialState, {
  [SELECT_LIST]: (state, { payload: { id, text } }) => state.map((list) => Object.assign({}, list, { id, text })),
  [UPDATE_LIST]: (state, action) => {
    console.log(action);
    return state.map((el) => Object.assign({}, el, { text: action.payload }));
  },
  [ADD_POSTIT]: (state, action) =>
    state.map((el) => {
      // console.log(state[0].postit, 'state');
      console.log(action.payload, 'payload');
      state[0].postit.push(action.payload);
      const temp = state[0].postit.slice();
      return Object.assign({}, { ...el }, { postit: temp });
    }),
  [UPDATE_POSTIT]: (state, action) =>
    state.map((el) => {
      console.log(action.payload.id);
      // const temp = state[0].postit.id
      return Object.assign({}, { ...el }, {});
    }),
  [HIDE_POSTIT]: (state, action) => {
    return state.map((el) => {
      console.log(action.payload);
      state[0].postit[0].hide = action.payload;
      return Object.assign({}, { ...el });
    });
  },
  [DELETE_POSTIT]: (state, action) => {
    return state.map((el) => {
      const temp = el.postit.filter((ele) => ele.id !== action.payload);
      return Object.assign({}, { ...el, postit: temp });
    });
  },
});
export default reducer;
