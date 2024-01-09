import { useState } from 'react';
import { Input } from 'src/components';
import { IBoard } from 'src/types';
import { editBoard } from 'src/api';
import { useBoardRequest, validateData } from 'src/utils';
import { INPUT_CONSTANTS } from 'src/constants';
import styles from './edit-board.module.scss';

interface IProps {
  board: IBoard;
  handleEditOpen: () => void;
}

export const EditBoard = ({ board, handleEditOpen }: IProps) => {
  const { name, id } = board;
  const { loadBoard } = useBoardRequest();

  const [newName, setNewName] = useState(name);

  const submitChange = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (name !== newName && validateData([newName])) {
      const response = await editBoard({ id, name: newName });

      if (response) {
        loadBoard(id);
        handleEditOpen();
      }
    }
  };

  return (
    <form onSubmit={submitChange} className={styles.editBoard}>
      <div className={styles.editBoard__input}>
        <Input value={newName} handleChange={setNewName} />
      </div>
      <div className={styles.editBoard__submitBtn}>
        <Input
          type="submit"
          value={INPUT_CONSTANTS.values.changeBoardName}
          handleChange={() => {}}
        />
      </div>
    </form>
  );
};
