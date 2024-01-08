import { useState } from 'react';
import { Button, Input } from 'src/components';
import { IBoardIds } from 'src/types';
import { BUTTON_CONSTANTS, INPUT_CONSTANTS } from 'src/constants';
import { addBoard } from 'src/api';
import { useBoardRequest } from 'src/utils';
import styles from './add-board.module.scss';

interface IProps {
  setBoardIds: React.Dispatch<React.SetStateAction<IBoardIds[]>>;
}

export const AddBoard = ({ setBoardIds }: IProps) => {
  const { loadBoard } = useBoardRequest();
  const [boardName, setBoardName] = useState('');

  const createBoard = async () => {
    const board = await addBoard(boardName);

    if (board) {
      loadBoard(board.id);
      setBoardIds((prev) => [{ id: board.id }, ...prev]);
    }
  };

  return (
    <div className={styles.addBoard}>
      <div className={styles.addBoard__input}>
        <Input
          placeholder={INPUT_CONSTANTS.placeholders.addBoard}
          value={boardName}
          handleChange={setBoardName}
        />
      </div>
      <Button
        name={BUTTON_CONSTANTS.names.addBoard}
        handleClick={createBoard}
      />
    </div>
  );
};
