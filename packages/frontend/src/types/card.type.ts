import { CardStatus } from '../types';

export interface ICard {
  id: string;
  title: string;
  description: string;
  boardId: string;
  status: CardStatus;
}
