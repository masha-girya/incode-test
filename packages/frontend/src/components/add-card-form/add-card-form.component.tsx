import { useState } from 'react';
import { AddCardField, Button, EditCardStatus } from 'src/components';
import { useAppSelector } from 'src/store';
import { CardAction, CardStatus, ICard } from 'src/types';
import { INPUT_CONSTANTS } from 'src/constants';
import {
  useBoardDispatch,
  validateData,
  useCardUpdate,
  sendRequest,
} from 'src/utils';
import styles from './add-card-form.module.scss';

interface IProps {
  card?: ICard;
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

    const cardsData = await sendRequest(() => {
      switch (action) {
        case CardAction.edit:
          return handleEditCard(
            {
              ...(card as ICard),
              ...updatedCard,
            },
            board,
            card as ICard,
          );

        case CardAction.add:
          return handleAddCard(
            {
              ...updatedCard,
              boardId,
              order: board.cards.filter(
                (card) => card.status === CardStatus.TODO,
              ).length,
            },
            board,
          );

        default:
          return new Promise((res) => res(board.cards));
      }
    }, handleClose);

    boardDispatch({ ...board, cards: await cardsData });
  };

  const handleUpdate = (key: keyof typeof updatedCard, value: any) => {
    setUpdatedCard((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Button isCloseButton handleClick={handleClose} />

      <AddCardField name={INPUT_CONSTANTS.LABELS.ADD_INPUT_TITLE}>
        <input
          type="text"
          className={styles.field__input}
          value={updatedCard.title}
          onChange={(e) => handleUpdate('title', e.target.value)}
        />
      </AddCardField>

      <AddCardField name={INPUT_CONSTANTS.LABELS.ADD_INPUT_DESC}>
        <textarea
          className={styles.field__textarea}
          value={updatedCard.description}
          onChange={(e) => handleUpdate('description', e.target.value)}
        />
      </AddCardField>

      {action === CardAction.edit && (
        <EditCardStatus status={updatedCard.status} setStatus={handleUpdate} />
      )}

      <input
        className={styles.submitBtn}
        type="submit"
        value={INPUT_CONSTANTS.VALUES.SUBMIT}
      />
    </form>
  );
};
