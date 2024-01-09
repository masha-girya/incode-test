import { Draggable, Droppable } from 'react-beautiful-dnd';
import { AddCard, Card } from 'src/components';
import { CardStatus, ICard } from 'src/types';
import styles from './board-column.module.scss';
import classNames from 'classnames';

interface IProps {
  cards: ICard[];
  column: CardStatus;
}

export const BoardColumn = (props: IProps) => {
  const { cards, column } = props;

  return (
    <section>
      <h2 className={styles.boardColumn__title}>{column}</h2>

      <div
        className={classNames(styles.boardColumn__cardsList, {
          [styles.boardColumn__cardsList_noCards]: !cards.find(
            (card) => card.status === CardStatus.TODO,
          ),
        })}
      >
        <Droppable droppableId={column}>
          {(provided) => (
            <div
              className={styles.boardColumn__cardsList_droppable}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {cards
                .sort((a, b) => a.order - b.order)
                .map((card, index) => (
                  <Draggable draggableId={card.id} key={card.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                      >
                        <Card cardInfo={card} />
                      </div>
                    )}
                  </Draggable>
                ))}

              {provided.placeholder}
            </div>
          )}
        </Droppable>

        {column === CardStatus.TODO && <AddCard />}
      </div>
    </section>
  );
};
