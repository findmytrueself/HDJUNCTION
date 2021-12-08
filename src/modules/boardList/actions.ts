import { createStandardAction } from 'typesafe-actions/dist/deprecated/create-standard-action';

const ADD_BOARDLIST = 'boardlist/ADD_BOARDLIST' as const;
const REMOVE_BOARDLIST = 'boardlist/REMOVE_BOARDLIST' as const;

export const addBoardList = createStandardAction(ADD_BOARDLIST)<string>();
export const removeBoardList = createStandardAction(REMOVE_BOARDLIST)<number>();
