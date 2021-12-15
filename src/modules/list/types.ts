import { PostitType } from '../../components/Postit';
import { ActionType } from 'typesafe-actions';

import * as actions from './actions';

export type ListAction = ActionType<typeof actions>;

export type List = {
  id: number;
  text: string;
  postit: PostitType[];
};

export type ListState = List[];
