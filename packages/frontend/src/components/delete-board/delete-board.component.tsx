import { Button } from 'src/components';
import { useAppSelector } from 'src/store';
import { removeBoard } from 'src/api';
import { removeLocalItems, sendRequest } from 'src/utils';
import { BUTTON_CONSTANTS, STORAGE_CONSTANTS } from 'src/constants';
import { useCallback } from 'react';

export const DeleteBoard = () => {
  const { boardId } = useAppSelector((state) => state.board);

  const deleteBoard = useCallback(async () => {
    const response = await sendRequest(() => removeBoard(boardId));

    if (response) {
      removeLocalItems([STORAGE_CONSTANTS.BOARD_ID]);
      window.location.reload();
    }
  }, [boardId]);

  return (
    <div>
      <Button
        name={BUTTON_CONSTANTS.NAMES.DELETE_BOARD}
        handleClick={deleteBoard}
      />
    </div>
  );
};
