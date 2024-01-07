import { useCallback } from 'react';
import { Card, AddCard } from 'src/components';
import { CardStatus, IBoard, ICard } from 'src/types';
import { BOARD_COLUMNS, CONTENT_CONSTANTS } from 'src/constants';
import styles from './board.module.scss';

interface IProps {
  board: IBoard;
  loadBoard: (id: string) => Promise<void>;
}

export const Board = ({ board, loadBoard }: IProps) => {
  const { id, cards } = board;

  const cardsInColumn = useCallback(
    (column: CardStatus) => cards.filter((card) => card.status === column),
    [cards],
  );

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
              {!cards && cardsInColumn(column).length === 0 && (
                <p className={styles.noCardsPlug}>
                  {CONTENT_CONSTANTS.noCards}
                </p>
              )}

              {cards &&
                getCardsWithStatus(column, cards).map((card) => (
                  <Card key={card.id} cardInfo={card} loadBoard={loadBoard} />
                ))}

              {column === CardStatus.TODO && (
                <AddCard boardId={id} loadBoard={loadBoard} />
              )}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};
