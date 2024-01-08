import { useCallback, useState } from 'react';
import { EditCardStatus } from 'src/components';
import { CardAction, CardStatus, ICard } from 'src/types';
import { INPUT_CONSTANTS } from 'src/constants';
import { addCard, editCard } from 'src/api';
import { shouldUpdate, useBoardRequest, validateData } from 'src/utils';
import styles from './add-card-form.module.scss';

interface IProps {
  card?: ICard;
  boardId: string;
  action: CardAction;
  handleClose: () => void;
}

export const AddCardForm = (props: IProps) => {
  const { loadBoard } = useBoardRequest();

  const { card, boardId, action, handleClose } = props;

  const [title, setTitle] = useState(card?.title ?? '');
  const [description, setDescription] = useState(card?.description ?? '');
  const [status, setStatus] = useState(card?.status ?? CardStatus.TODO);

  const getActionResult = useCallback(
    async (action: CardAction, data: Omit<ICard, 'id'>) => {
      switch (action) {
        case CardAction.add:
          return await addCard(data);
        case CardAction.edit:
          if (!card) {
            return;
          }

          const updatedCard = { ...card, ...data };

          if (shouldUpdate(card, updatedCard)) {
            return await editCard(updatedCard);
          }
      }
    },
    [card],
  );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const isValidData = validateData([title, description]);

      if (!isValidData) {
        return;
      }

      const response = await getActionResult(action, {
        title,
        description,
        status,
        boardId,
      });

      if (response) {
        loadBoard(boardId);
      }
    } catch (error) {
      console.error(error);
    } finally {
      handleClose();
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.field}>
        <p>{INPUT_CONSTANTS.labels.addInputTitle}</p>
        <input
          type="text"
          className={styles.field__input}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>

      <label className={styles.field}>
        <p>{INPUT_CONSTANTS.labels.addInputDesk}</p>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>

      {action === CardAction.edit && (
        <EditCardStatus status={status} setStatus={setStatus} />
      )}

      <input
        className={styles.submitBtn}
        type="submit"
        value={INPUT_CONSTANTS.values.submit}
      />
    </form>
  );
};
