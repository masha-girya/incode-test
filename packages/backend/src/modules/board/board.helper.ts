import { CardStatus } from 'src/types';
import { CardDto } from '../card';

export const getCardsSorted = (cards: CardDto[], status: CardStatus) => {
  return cards
    .filter((card) => card.status === status)
    .sort((a, b) => a.order - b.order);
};
