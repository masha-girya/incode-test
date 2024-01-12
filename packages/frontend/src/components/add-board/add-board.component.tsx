import { useState } from 'react';
import { Button, Input } from 'src/components';
import { IBoardIds } from 'src/types';
import { BUTTON_CONSTANTS, INPUT_CONSTANTS } from 'src/constants';
import { addBoard } from 'src/api';
import { validateData, useBoardDispatch, sendRequest } from 'src/utils';
import styles from './add-board.module.scss';

interface IProps {
  setBoardIds: React.Dispatch<React.SetStateAction<IBoardIds[]>>;
}

export const AddBoard = ({ setBoardIds }: IProps) => {
  const boardDispatch = useBoardDispatch();

  const [boardName, setBoardName] = useState('');

  const createBoard = async () => {
    const isValidName = validateData([boardName]);

    if (!isValidName) {
      return;
    }

    const board = await sendRequest(() => addBoard(boardName));

    if (board) {
      boardDispatch(board);
      setBoardName('');
      setBoardIds((prev) => [{ id: board.id }, ...prev]);
    }
  };

  return (
    <div className={styles.addBoard}>
      <div className={styles.addBoard__input}>
        <Input
          placeholder={INPUT_CONSTANTS.PLACEHOLDERS.SEARCH_BOARD}
          value={boardName}
          handleChange={setBoardName}
        />
      </div>
      <Button
        name={BUTTON_CONSTANTS.NAMES.ADD_BOARD}
        handleClick={createBoard}
      />
    </div>
  );
};
