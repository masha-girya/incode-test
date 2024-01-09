import { useState } from 'react';
import classNames from 'classnames';
import { Button, EditBoard, EditIcon, PlusIcon } from 'src/components';
import { IBoard } from 'src/types';
import { BUTTON_CONSTANTS, CONTENT_CONSTANTS } from 'src/constants';
import styles from './board-info.module.scss';

interface IProps {
  board: IBoard;
}

export const BoardInfo = ({ board }: IProps) => {
  const { name, id } = board;

  const [isOnEdit, setIsOnEdit] = useState(false);

  const handleEditOpen = () => {
    setIsOnEdit(!isOnEdit);
  };

  return (
    <div className={styles.boardInfo}>
      <p className={styles.boardInfo__text}>
        {CONTENT_CONSTANTS.boardId}
        <span>{id}</span>
      </p>

      <div className={styles.boardInfo__name}>
        <p className={styles.boardInfo__text}>
          {CONTENT_CONSTANTS.boardName}
          <span>{name}</span>
        </p>

        <Button
          name=""
          ariaLabel={BUTTON_CONSTANTS.ariaLabels.editBoard}
          Icon={
            isOnEdit ? (
              <PlusIcon
                className={classNames(
                  styles.boardInfo__icon,
                  styles.boardInfo__icon_close,
                )}
              />
            ) : (
              <EditIcon className={styles.boardInfo__icon} />
            )
          }
          isSmallIcon
          handleClick={handleEditOpen}
        />

        {isOnEdit && (
          <EditBoard board={board} handleEditOpen={handleEditOpen} />
        )}
      </div>
    </div>
  );
};
