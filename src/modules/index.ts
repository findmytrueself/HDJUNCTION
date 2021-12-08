import { combineReducers } from 'redux';

import boardList from './boardList';

const rootReducer = combineReducers({
  boardList,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
// 컴포넌트에서 사용하게 될 스토어에 저장된 데이터의 타입
