import { createAction } from 'typesafe-actions';
// action 정의
export const ADD_LIST = 'list/ADD_LIST' as const;
export const REMOVE_LIST = 'list/REMOVE_LIST' as const;

// actionCreate 함수정의
export const addList = createAction(ADD_LIST)<string>();
export const removeList = createAction(REMOVE_LIST)<number>();
