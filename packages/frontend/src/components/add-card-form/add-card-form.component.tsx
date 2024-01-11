import { useState } from 'react';
import { EditCardStatus } from 'src/components';
import { useAppSelector } from 'src/store';
import { CardAction, CardStatus, ICard } from 'src/types';
import { INPUT_CONSTANTS } from 'src/constants';
import { useBoardDispatch, validateData, useCardUpdate } from 'src/utils';
import styles from './add-card-form.module.scss';

interface IProps {
  card?: ICard;
  boardId: string;
  action: CardAction;
  handleClose: () => void;
}

export const AddCardForm = (props: IProps) => {
  const { card, action, handleClose } = props;
  const { board, boardId } = useAppSelector((state) => state.board);

  const { handleEditCard, handleAddCard } = useCardUpdate();
  const boardDispatch = useBoardDispatch();

  const [updatedCard, setUpdatedCard] = useState({
    title: card?.title ?? '',
    description: card?.description ?? '',
    status: card?.status ?? CardStatus.TODO,
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!board) {
      return;
    }

    const isValidData = validateData([
      updatedCard.title,
      updatedCard.description,
    ]);

    if (!isValidData) {
      return;
    }

    try {
      switch (action) {
        case CardAction.edit:
          const editedCards = await handleEditCard(
            {
              ...(card as ICard),
              ...updatedCard,
            },
            board,
            card as ICard,
          );

          boardDispatch({ ...board, cards: editedCards });
          break;

        case CardAction.add:
          const newCardRes = await handleAddCard(
            {
              ...updatedCard,
              boardId,
              order: board.cards.filter(
                (card) => card.status === CardStatus.TODO,
              ).length,
            },
            board,
          );

          boardDispatch({ ...board, cards: newCardRes });
          break;

        default:
          break;
      }
    } catch (error) {
      console.error(error);
    } finally {
      handleClose();
    }
  };

  const handleUpdate = (key: keyof typeof updatedCard, value: any) => {
    setUpdatedCard((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.field}>
        <p>{INPUT_CONSTANTS.labels.addInputTitle}</p>
        <input
          type="text"
          className={styles.field__input}
          value={updatedCard.title}
          onChange={(e) => handleUpdate('title', e.target.value)}
        />
      </label>

      <label className={styles.field}>
        <p>{INPUT_CONSTANTS.labels.addInputDesk}</p>
        <textarea
          value={updatedCard.description}
          onChange={(e) => handleUpdate('description', e.target.value)}
        />
      </label>

      {action === CardAction.edit && (
        <EditCardStatus status={updatedCard.status} setStatus={handleUpdate} />
      )}

      <input
        className={styles.submitBtn}
        type="submit"
        value={INPUT_CONSTANTS.values.submit}
      />
    </form>
  );
};
