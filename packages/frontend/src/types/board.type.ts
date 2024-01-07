import { ICard } from 'src/types';

export interface IBoard {
  id: string;
  createdDate: Date;
  cards: ICard[];
}
