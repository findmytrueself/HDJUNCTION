import { createAction } from 'typesafe-actions';

// action 정의
export const ADD_LISTS = 'list/ADD_LISTS' as const;
export const REMOVE_LISTS = 'list/REMOVE_LISTS' as const;
export const UPDATE_LISTS = 'list/UPDATE_LISTS' as const;

export interface UPDATE {
  id: number;
  text: string;
}
// actionCreate 함수정의
export const addLists = createAction(ADD_LISTS)<string>();
export const removeLists = createAction(REMOVE_LISTS)<number>();
export const updateLists = createAction(UPDATE_LISTS)<UPDATE>();
