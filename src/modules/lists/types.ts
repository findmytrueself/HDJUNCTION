import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type ListsAction = ActionType<typeof actions>;

export type Lists = {
  id: number;
  text: string;
};

export type ListsState = Lists[];
