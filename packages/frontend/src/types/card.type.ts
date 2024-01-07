import { CardStatus } from 'src/types';

export interface ICard {
  id: string;
  title: string;
  description: string;
  boardId: string;
  status: CardStatus;
}
