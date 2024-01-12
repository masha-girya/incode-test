import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { BoardColumn, BoardMobile } from 'src/components';
import { IBoard } from 'src/types';
import { BOARD_COLUMNS } from 'src/constants';
import { editCard } from 'src/api';
import {
  getCardsWithStatus,
  reorderCards,
  sendRequest,
  useBoardDispatch,
} from 'src/utils';
import styles from './board-droppable.module.scss';

interface IProps {
  board: IBoard;
}

export const BoardDroppable = ({ board }: IProps) => {
  const { cards } = board;

  const boardDispatch = useBoardDispatch();

  const handleDragEnd = async (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    const { droppableId: column, index: order } = source;
    const { droppableId: destColumn, index: newOrder } = destination;

    if (column === destColumn && order === newOrder) {
      return;
    }

    const card = cards.find((card) => card.id === draggableId);

    if (card) {
      const cardsWithStatus = reorderCards(board, card, destination, order);

      const cardsToDisplay = [
        ...cards.filter(
          (card) => card.status !== destColumn && card.id !== draggableId,
        ),
        ...cardsWithStatus,
      ];

      boardDispatch({
        ...board,
        cards: cardsToDisplay.slice(),
      });

      await sendRequest(() =>
        Promise.all(
          cardsWithStatus.map((card, index) =>
            editCard({
              ...card,
              order: index,
            }),
          ),
        ),
      );
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <BoardMobile cards={cards} />

      <div className={styles.boardDesktop}>
        {BOARD_COLUMNS.map((column) => (
          <BoardColumn
            key={column}
            cards={getCardsWithStatus(column, cards)}
            column={column}
          />
        ))}
      </div>
    </DragDropContext>
  );
};
