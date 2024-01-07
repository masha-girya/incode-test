import { useCallback, useState } from 'react';
import {
  BOARD_COLUMNS,
  BUTTON_CONSTANTS,
  INPUT_CONSTANTS,
} from 'src/constants';
import { addCard, editCard } from 'src/api';
import { CardAction, CardStatus, ICard } from 'src/types';
import styles from './add-card-form.module.scss';

interface IProps {
  card?: ICard;
  boardId: string;
  action: CardAction;
  handleClose: () => void;
  loadBoard: (id: string) => Promise<void>;
}

export const AddCardForm = (props: IProps) => {
  const { card, boardId, action, handleClose, loadBoard } = props;

  const [title, setTitle] = useState(card?.title ?? '');
  const [description, setDescription] = useState(card?.description ?? '');
  const [status, setStatus] = useState(card?.status ?? CardStatus.TODO);

  const validateData = useCallback(() => {
    if (title.trim().length > 0 && description.trim().length > 0) {
      return true;
    }

    return false;
  }, [title, description]);

  const getActionResult = async () => {
    if (action === CardAction.add) {
      return await addCard({ title, description, boardId });
    }
    if (action === CardAction.edit && card) {
      const updatedCard = Object.assign(card, { title, description, status });

      return await editCard(updatedCard);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLDivElement>) => {
    event.preventDefault();

    try {
      const isValidData = validateData();

      if (!isValidData) {
        return;
      }

      const response = await getActionResult();

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
    <div className={styles.addCardForm} onSubmit={handleSubmit}>
      <button
        type="button"
        area-label={BUTTON_CONSTANTS.ariaLabels.close}
        className={styles.closeBtn}
        onClick={handleClose}
      >
        <div className={styles.closeBtn__cross}>+</div>
      </button>

      <form className={styles.addCardForm__form}>
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
          <fieldset>
            Status:
            {BOARD_COLUMNS.map((boardStatus) => (
              <div className="radio" key={boardStatus}>
                <label>
                  <input
                    type="radio"
                    value={status}
                    checked={boardStatus === status}
                    onChange={() => setStatus(boardStatus)}
                  />
                  {boardStatus}
                </label>
              </div>
            ))}
          </fieldset>
        )}

        <input
          className={styles.submitBtn}
          type="submit"
          value={INPUT_CONSTANTS.values.submit}
        />
      </form>
    </div>
  );
};
