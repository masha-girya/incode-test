import { useCallback } from 'react';
import { AddCard, Card, NoCardsPlug } from 'src/components';
import { CardStatus, ICard } from 'src/types';
import styles from './board-column.module.scss';

interface IProps {
  cards: ICard[];
  column: CardStatus;
}

export const BoardColumn = (props: IProps) => {
  const { cards, column } = props;

  const cardsInColumn = useCallback(
    (column: CardStatus, cards: ICard[]) =>
      cards.find((card) => card.status === column),
    [],
  );

  return (
    <section>
      <h2 className={styles.boardColumn__title}>{column}</h2>

      <div className={styles.boardColumn__cardsList}>
        {cardsInColumn(column, cards) ? (
          cards.map((card) => <Card key={card.id} cardInfo={card} />)
        ) : (
          <NoCardsPlug column={column} />
        )}

        {column === CardStatus.TODO && <AddCard />}
      </div>
    </section>
  );
};
