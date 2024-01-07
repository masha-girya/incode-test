import { useCallback } from 'react';
import { Card, AddCard } from 'src/components';
import { CardStatus, IBoard, ICard } from 'src/types';
import { BOARD_COLUMNS } from 'src/constants';
import styles from './board.module.scss';

interface IProps {
  board: IBoard;
}

export const Board = ({ board }: IProps) => {
  const { id, cards } = board;

  const getCardsWithStatus = useCallback(
    (status: CardStatus, cardsData: ICard[]) => {
      return cardsData.filter((card) => card.status === status);
    },
    [],
  );

  return (
    <div className={styles.board}>
      <p className={styles.board__boardID}>
        Current board ID: <span>{id}</span>
      </p>
      <div className={styles.boardColumns}>
        {BOARD_COLUMNS.map((column) => (
          <section key={column}>
            <h2 className={styles.boardColumns__title}>{column}</h2>

            <div className={styles.boardColumns__cardsList}>
              {cards &&
                getCardsWithStatus(column, cards).map((card) => (
                  <Card key={card.id} cardInfo={card} />
                ))}

              {column === CardStatus.TODO && <AddCard />}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};
