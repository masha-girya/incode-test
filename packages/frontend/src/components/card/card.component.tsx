import { useCallback, useState } from 'react';
import classNames from 'classnames';
import {
  AddCardForm,
  Button,
  DeleteCardPlug,
  EditIcon,
  TrashIcon,
} from 'src/components';
import { CardAction, ICard } from 'src/types';
import { BUTTON_CONSTANTS } from 'src/constants';
import { deleteCard } from 'src/api';
import styles from './card.module.scss';

interface IProps {
  cardInfo: ICard;
  loadBoard: (id: string) => Promise<void>;
}

export const Card = ({ cardInfo, loadBoard }: IProps) => {
  const { title, description, boardId, id } = cardInfo;
  const [onEdit, setOnEdit] = useState(false);
  const [onDelete, setOnDelete] = useState(false);

  const removeCard = useCallback(async () => {
    await deleteCard(id);
    loadBoard(boardId);
  }, [id, boardId]);

  return (
    <div className={classNames(styles.card, { [styles.card_onEdit]: onEdit })}>
      {onEdit ? (
        <AddCardForm
          boardId={boardId}
          handleClose={() => setOnEdit(false)}
          loadBoard={loadBoard}
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
