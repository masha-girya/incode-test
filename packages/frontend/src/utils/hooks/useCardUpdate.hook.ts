import { IBoard, ICard, ICardRequest } from 'src/types';
import { sendRequest, shouldUpdate } from '../helpers';
import { addCard, editCard } from 'src/api';

export const useCardUpdate = () => {
  const handleEditCard = async (
    updatedCard: ICard,
    board: IBoard,
    oldCard: ICard,
  ) => {
    if (shouldUpdate(oldCard, updatedCard)) {
      const newCardData = await sendRequest(() => editCard(updatedCard));

      return board.cards.map((card) =>
        oldCard.id === newCardData.id ? { ...newCardData } : card,
      );
    }

    return board.cards;
  };

  const handleAddCard = async (newCard: ICardRequest, board: IBoard) => {
    const newCardData = await sendRequest(() => addCard(newCard));

    return [...board.cards, newCardData];
  };

  return { handleEditCard, handleAddCard };
};
