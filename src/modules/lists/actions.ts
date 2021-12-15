import { createAction } from 'typesafe-actions';
import { PostitType } from './../../components/PostIt';
// action 정의
export const ADD_LISTS = 'list/ADD_LISTS' as const;
export const REMOVE_LISTS = 'list/REMOVE_LISTS' as const;
export const UPDATE_LISTS = 'list/UPDATE_LISTS' as const;

// postit Action객체
export const ADD_POSTIT = 'list/ADD_POSTIT' as const;
export const UPDATE_POSTIT = 'list/UPDATE_POSTIT' as const;
export const HIDE_POSTIT = 'list/HIDE_POSTIT' as const;
export interface LISTS {
  id: number;
  text: string;
  postit: Array<PostitType>;
}
// actionCreate 함수정의
export const addLists = createAction(ADD_LISTS)<string>();
export const removeLists = createAction(REMOVE_LISTS)<number>();
export const updateLists = createAction(UPDATE_LISTS)<LISTS>();

// postit 관련 createAction
export const addPostIt = createAction(ADD_POSTIT)<PostitType>();
export const updatePostIt = createAction(UPDATE_POSTIT)<LISTS>();
export const hidePostIt = createAction(HIDE_POSTIT)<LISTS>();
