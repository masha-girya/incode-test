import { CardStatus, IBoard } from 'src/types';

export const MOCK_CARD_LIST = [
  {
    id: 'test',
    title: 'Title',
    description: 'Description',
    boardId: 'board-test',
    status: CardStatus.TODO,
  },
  {
    id: 'test2',
    title: 'Title2',
    description: 'Description2',
    boardId: 'board-test',
    status: CardStatus.TODO,
  },
  {
    id: 'test3',
    title: 'Title3',
    description: 'Description3',
    boardId: 'board-test',
    status: CardStatus.IN_PROGRESS,
  },
  {
    id: 'test4',
    title: 'Title4',
    description: 'Description4',
    boardId: 'board-test',
    status: CardStatus.DONE,
  },
  {
    id: 'test5',
    title: 'Title5',
    description: 'Description5',
    boardId: 'board-test',
    status: CardStatus.IN_PROGRESS,
  },
];

export const MOCK_BOARD: IBoard = {
  id: 'BOARD',
  cards: MOCK_CARD_LIST,
  createdDate: new Date(),
};
