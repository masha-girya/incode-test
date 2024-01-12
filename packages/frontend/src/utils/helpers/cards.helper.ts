import { DraggableLocation } from 'react-beautiful-dnd';
import { CardStatus, IBoard, ICard } from 'src/types';

export const reorderCards = (
  board: IBoard,
  card: ICard,
  destination: DraggableLocation,
  order: number,
) => {
  const { droppableId: destColumn, index: newOrder } = destination;

  const newCards = board.cards.filter((card) => card.status === destColumn);
  // .sort((a, b) => a.order - b.order);

  if (card.status !== destColumn) {
    newCards.splice(newOrder, 0, {
      ...card,
      status: destColumn as CardStatus,
    });
  } else {
    newCards.splice(order, 1);
    newCards.splice(newOrder, 0, card);
  }

  return newCards;
};

export const getCardsWithStatus = (status: CardStatus, cardsData: ICard[]) => {
  return cardsData ? cardsData.filter((card) => card.status === status) : [];
};
