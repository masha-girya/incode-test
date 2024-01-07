import { useCallback, useState } from 'react';
import classNames from 'classnames';
import { AddCardForm, AddCardButton } from 'src/components';
import { CardAction } from 'src/types';
import styles from './add-card.module.scss';

interface IProps {
  boardId: string;
  loadBoard: (id: string) => Promise<void>;
}

export const AddCard = ({ boardId, loadBoard }: IProps) => {
  const [isOnAdd, setIsOnAdd] = useState(false);

  const handleOpen = useCallback(() => {
    setIsOnAdd(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsOnAdd(false);
  }, []);

  return (
    <div
      className={classNames(styles.addCard, {
        [styles.addCard_onAdd]: isOnAdd,
      })}
    >
      {isOnAdd ? (
        <AddCardForm
          handleClose={handleClose}
          boardId={boardId}
          loadBoard={loadBoard}
          action={CardAction.add}
        />
      ) : (
        <AddCardButton handleClick={handleOpen} />
      )}
    </div>
  );
};
