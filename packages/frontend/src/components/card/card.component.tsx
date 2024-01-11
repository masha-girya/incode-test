import { useCallback, useState } from 'react';
import classNames from 'classnames';
import {
  AddCardForm,
  Button,
  DeleteCardPlug,
  EditIcon,
  TrashIcon,
} from 'src/components';
import { useAppSelector } from 'src/store';
import { CardAction, ICard } from 'src/types';
import { BUTTON_CONSTANTS } from 'src/constants';
import { deleteCard } from 'src/api';
import { useBoardDispatch } from 'src/utils';
import styles from './card.module.scss';

interface IProps {
  cardInfo: ICard;
}

export const Card = ({ cardInfo }: IProps) => {
  const { title, description, boardId, id } = cardInfo;
  const { board } = useAppSelector((state) => state.board);

  const boardDispatch = useBoardDispatch();

  const [onEdit, setOnEdit] = useState(false);
  const [onDelete, setOnDelete] = useState(false);

  const removeCard = useCallback(async () => {
    await deleteCard(id);

    if (board) {
      boardDispatch({
        ...board,
        cards: board.cards.filter((card) => card.id !== id),
      });
    }
  }, [id, board]);

  return (
    <div className={classNames(styles.card, { [styles.card_onEdit]: onEdit })}>
      {onEdit ? (
        <AddCardForm
          boardId={boardId}
          handleClose={() => setOnEdit(false)}
          action={CardAction.edit}
          card={cardInfo}
        />
      ) : (
        <div className={styles.card__info}>
          <h4 className={styles.card__info__title}>{title}</h4>
          <p className={styles.card__info__desc}>{description}</p>
        </div>
      )}

      {!onEdit && !onDelete && (
        <div className={styles.card__buttons}>
          <Button
            name=""
            handleClick={() => setOnEdit(true)}
            Icon={<EditIcon className={styles.iconBtn} />}
            aria-label={BUTTON_CONSTANTS.ariaLabels.edit}
            isSmallIcon
          />
          <Button
            name=""
            handleClick={() => setOnDelete(true)}
            Icon={<TrashIcon className={styles.iconBtn} />}
            aria-label={BUTTON_CONSTANTS.ariaLabels.edit}
            isSmallIcon
          />
        </div>
      )}

      {onDelete && (
        <DeleteCardPlug
          handleClose={() => setOnDelete(false)}
          handleDelete={removeCard}
        />
      )}
    </div>
  );
};
