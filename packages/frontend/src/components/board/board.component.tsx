import { useCallback } from 'react';
import { BoardColumn } from 'src/components';
import { useAppSelector } from 'src/store';
import { CardStatus, ICard } from 'src/types';
import { BOARD_COLUMNS } from 'src/constants';
import styles from './board.module.scss';

export const Board = () => {
  const { board } = useAppSelector((state) => state.board);

  const getCardsWithStatus = useCallback(
    (status: CardStatus, cardsData: ICard[]) => {
      return cardsData.filter((card) => card.status === status);
    },
    [],
  );

  return board ? (
    <div className={styles.board}>
      <p className={styles.board__boardID}>
        Current board ID: <span>{board.id}</span>
      </p>
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
