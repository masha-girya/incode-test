import { ICard } from 'src/types';

export interface IBoard {
  id: string;
  name: string;
  createdDate: Date;
  cards: ICard[];
}

export interface IBoardIds extends Pick<IBoard, 'id'> {}
