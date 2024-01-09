import { useCallback, useEffect } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { BoardColumn, BoardInfo, DeleteBoard } from 'src/components';
import { useAppSelector } from 'src/store';
import { CardStatus, ICard } from 'src/types';
import { BOARD_COLUMNS } from 'src/constants';
import { editCard } from 'src/api';
import { useBoardRequest } from 'src/utils';
import styles from './board.module.scss';

export const Board = () => {
  const { board, boardId } = useAppSelector((state) => state.board);

  const { loadBoard } = useBoardRequest();

  const getCardsWithStatus = useCallback(
    (status: CardStatus, cardsData: ICard[]) => {
      return cardsData.filter((card) => card.status === status);
    },
    [],
  );

  const handleDragEnd = async (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    const column = source.droppableId;
    const destColumn = destination.droppableId as CardStatus;
    const order = source.index;
    const newOrder = destination.index;

    if (column !== destColumn) {
      await editCard({
        boardId,
        id: draggableId,
        status: destColumn,
      });
    }

    if (order !== newOrder && board) {
      const cardsWithStatusCopy = board.cards.filter(
        (card) => card.status === destColumn,
      );
      const card = board.cards[order];

      cardsWithStatusCopy.splice(order, 1);
      cardsWithStatusCopy.splice(newOrder, 0, card);

      const newCards = cardsWithStatusCopy.map((card, index) => ({
        ...card,
        order: index,
      }));

      await Promise.all(
        newCards.map((card) =>
          editCard({
            id: draggableId,
            boardId,
            status: destColumn,
            order: card.order,
          }),
        ),
      );
    }

    loadBoard(boardId);
  };

  useEffect(() => {
    if (boardId.length > 0) {
      loadBoard(boardId);
    }
  }, []);

  return board ? (
    <div className={styles.board}>
      <BoardInfo board={board} />
      <DeleteBoard />
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className={styles.board__boardColumns}>
          {BOARD_COLUMNS.map((column) => (
            <BoardColumn
              key={column}
              cards={getCardsWithStatus(column, board.cards)}
              column={column}
            />
          ))}
        </div>
      </DragDropContext>
    </div>
  ) : (
    <></>
  );
};
