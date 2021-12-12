import { combineReducers } from 'redux';
import lists from './lists';
import list from './list';
const rootReducer = combineReducers({
  lists,
  list,
});

export default rootReducer;

export type Rootstate = ReturnType<typeof rootReducer>;
