import { useCallback, useState } from 'react';
import { AddCardForm, AddCardButton } from '../../components';
import styles from './add-card.module.scss';
import classNames from 'classnames';

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
