import { useCallback, useState } from 'react';
import classNames from 'classnames';
import { AddCardForm, AddCardButton } from 'src/components';
import styles from './add-card.module.scss';

export const AddCard = () => {
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
        <AddCardForm handleClose={handleClose} />
      ) : (
        <AddCardButton handleClick={handleOpen} />
      )}
    </div>
  );
};
