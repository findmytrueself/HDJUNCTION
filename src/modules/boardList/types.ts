interface BoardList {
  id: number;
  text: string;
  show: boolean;
}
type BoardListState = BoardList[];

const initialState: BoardListState = [
  { id: 1, text: 'My first board', show: false },
  { id: 2, text: 'Awesome board', show: true },
  { id: 3, text: 'Test board', show: false },
  { id: 4, text: 'Brainstorming', show: false },
];
