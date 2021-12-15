import { PostitType } from '../../components/Postit';
import { createAction } from 'typesafe-actions';
// list Action객체
export const SELECT_LIST = 'list/SELECT_LIST' as const;
export const UPDATE_LIST = 'list/UPDATE_LIST' as const;
// postit Action객체
export const ADD_POSTIT = 'list/ADD_POSTIT' as const;
export const UPDATE_POSTIT = 'list/UPDATE_POSTIT' as const;
export const HIDE_POSTIT = 'list/HIDE_POSTIT' as const;
export const DELETE_POSTIT = 'list/DELETE_POSTIT' as const;
interface SELECT {
  id: number;
  text: string;
  postit: Array<PostitType>;
}
// list 관련 createAction
export const selectList = createAction(SELECT_LIST)<SELECT>();
export const updateList = createAction(UPDATE_LIST)<string>();
// postit 관련 createAction
export const addPostIt = createAction(ADD_POSTIT)<PostitType>();
export const updatePostIt = createAction(UPDATE_POSTIT)<SELECT>();
export const hidePostIt = createAction(HIDE_POSTIT)<boolean>();
export const deletePostIt = createAction(DELETE_POSTIT)<number>();
