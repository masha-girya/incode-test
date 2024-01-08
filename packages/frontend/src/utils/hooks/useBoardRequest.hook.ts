import { getBoarById } from 'src/api';
import { useCallback } from 'react';
import { boardActions } from 'src/store/features/board.slice';
import { useAppDispatch } from 'src/store';
import { setLocalItem } from 'src/utils';
import { STORAGE_CONSTANTS } from 'src/constants';

export const useBoardRequest = () => {
  const dispatch = useAppDispatch();

  const loadBoard = useCallback(async (id: string) => {
    const boardData = await getBoarById(id);

    if (boardData) {
      dispatch(boardActions.setId(boardData.id));
      dispatch(boardActions.setBoard(boardData));

      setLocalItem(STORAGE_CONSTANTS.boardId, boardData.id);
    }

    return boardData;
  }, []);

  return { loadBoard };
};
