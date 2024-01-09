import { BUTTON_CONSTANTS, STORAGE_CONSTANTS } from 'src/constants';
import { Button } from 'src/components';
import { useAppSelector } from 'src/store';
import { removeBoard } from 'src/api';
import { removeLocalItems } from 'src/utils';

export const DeleteBoard = () => {
  const { boardId } = useAppSelector((state) => state.board);

  const deleteBoard = async () => {
    const response = await removeBoard(boardId);

    if (response) {
      removeLocalItems([STORAGE_CONSTANTS.boardId]);
      window.location.reload();
    }
  };

  return (
    <div>
      <Button
        name={BUTTON_CONSTANTS.names.deleteBoard}
        handleClick={deleteBoard}
      />
    </div>
  );
};
