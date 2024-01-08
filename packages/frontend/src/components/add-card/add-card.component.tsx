import { useCallback, useState } from 'react';
import classNames from 'classnames';
import { AddCardForm, AddCardButton } from 'src/components';
import { CardAction } from 'src/types';
import { BUTTON_CONSTANTS, STORAGE_CONSTANTS } from 'src/constants';
import { getLocalItem } from 'src/utils';
import styles from './add-card.module.scss';

export const AddCard = () => {
  const [isOnAdd, setIsOnAdd] = useState(false);
  const boardId = JSON.parse(getLocalItem(STORAGE_CONSTANTS.boardId) || '');

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
          <button
            type="button"
            area-label={BUTTON_CONSTANTS.ariaLabels.close}
            className={styles.closeBtn}
            onClick={handleClose}
          >
            <div className={styles.closeBtn__cross}>+</div>
          </button>

          <AddCardForm
            handleClose={handleClose}
            boardId={boardId}
            action={CardAction.add}
          />
        </div>
      ) : (
        <AddCardButton handleClick={handleOpen} />
      )}
    </div>
  );
};
