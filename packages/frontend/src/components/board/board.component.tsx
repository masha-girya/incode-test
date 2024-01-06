import { useCallback, useState } from 'react';
import { Card, AddCard } from '../../components';
import { CardStatus, ICard } from '../../types';
import { BOARD_COLUMNS, MOCK_CARD_LIST } from '../../constants';
import styles from './board.module.scss';

export const Board = () => {
  const [cards, setCards] = useState(MOCK_CARD_LIST);

  const getCardsWithStatus = useCallback(
    (status: CardStatus, cardsData: ICard[]) => {
      return cardsData.filter((card) => card.status === status);
    },
    [],
  );

  return (
    <div className={styles.board}>
      {BOARD_COLUMNS.map((column) => (
        <div key={column} className={styles.board__column}>
          <h2 className={styles.board__title}>{column}</h2>

          <div className={styles.board__cardsList}>
            {cards &&
              getCardsWithStatus(column, cards).map((card) => (
                <Card key={card.id} cardInfo={card} />
              ))}

            {column === CardStatus.TODO && <AddCard />}
          </div>
        </div>
      ))}
    </div>
  );
};
