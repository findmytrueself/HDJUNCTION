import { createAction } from 'typesafe-actions';

export const SELECT_LIST = 'list/SELECT_LIST' as const;
export const UPDATE_LIST = 'list/UPDATE_LIST' as const;

export type POSTIT = {
  postit: { title: string; content: string; hide: boolean };
};
interface SELECT {
  id: number;
  text: string;
  postit: POSTIT;
}

export const selectList = createAction(SELECT_LIST)<SELECT>();
export const updateList = createAction(UPDATE_LIST)<string>();
