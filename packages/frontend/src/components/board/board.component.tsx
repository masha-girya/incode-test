import { useCallback, useEffect } from 'react';
import { BoardColumn, BoardInfo, DeleteBoard } from 'src/components';
import { useAppSelector } from 'src/store';
import { CardStatus, ICard } from 'src/types';
import { BOARD_COLUMNS } from 'src/constants';
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

  useEffect(() => {
    if (boardId.length > 0) {
      loadBoard(boardId);
    }
  }, []);

  return board ? (
    <div className={styles.board}>
      <BoardInfo board={board} />
      <DeleteBoard />
      <div className={styles.board__boardColumns}>
        {BOARD_COLUMNS.map((column) => (
          <BoardColumn
            key={column}
            cards={getCardsWithStatus(column, board.cards)}
            column={column}
          />
        ))}
      </div>
    </div>
  ) : (
    <></>
  );
};
