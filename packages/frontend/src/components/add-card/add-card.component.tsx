import { useCallback, useState } from 'react';
import classNames from 'classnames';
import { AddCardForm, PlusIcon } from 'src/components';
import { CardAction } from 'src/types';
import { BUTTON_CONSTANTS } from 'src/constants';
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
        <div className={styles.addCard__form}>
          <AddCardForm handleClose={handleClose} action={CardAction.add} />
        </div>
      ) : (
        <button
          type="button"
          aria-label={BUTTON_CONSTANTS.ARIA_LABELS.ADD_TODO}
          className={styles.addCard__addButton}
          onClick={handleOpen}
        >
          <PlusIcon />
        </button>
      )}
    </div>
  );
};
