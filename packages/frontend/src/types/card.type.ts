import { CardStatus } from 'src/types';

export interface ICard {
  id: string;
  title: string;
  description: string;
  boardId: string;
  status: CardStatus;
  order: number;
}

export interface ICardRequest extends Omit<ICard, 'id' | 'status'> {}
