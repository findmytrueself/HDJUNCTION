import { ActionType } from 'typesafe-actions';
import { PostitType } from './../../components/PostIt';
import * as actions from './actions';

export type ListsAction = ActionType<typeof actions>;

export type Lists = {
  id: number;
  text: string;
  postit: PostitType[];
};

export type ListsState = Lists[];
