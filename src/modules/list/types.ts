import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type ListAction = ActionType<typeof actions>;

export type List = {
  id: number;
  text: string;
};

export type ListState = List[];
