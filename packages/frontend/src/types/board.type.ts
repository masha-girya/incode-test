import { ICard } from 'src/types';

export interface IBoard {
  id: string;
  createdDate: Date;
  cards: ICard[];
}

export interface IBoardIds extends Pick<IBoard, 'id'> {}
