import { ICard } from 'src/types';

export const shouldUpdate = (initialCard: ICard, updatedCard: ICard) => {
  let key: keyof ICard;

  for (key in initialCard) {
    if (initialCard[key] !== updatedCard[key]) {
      return true;
    }
  }
};

export const validateData = (data: string[]) => {
  return data.every((item) => item.trim().length !== 0);
};
