import { useCallback } from 'react';
import { IBoard } from 'src/types';
import { useAppDispatch } from 'src/store';
import { boardActions } from 'src/store/features/board.slice';
import { setLocalItem } from '../helpers';
import { STORAGE_CONSTANTS } from 'src/constants';

export const useBoardDispatch = () => {
  const dispatch = useAppDispatch();

  const boardDispatch = useCallback((board: IBoard) => {
    dispatch(boardActions.setId(board.id));
    dispatch(boardActions.setBoard(board));

    setLocalItem(STORAGE_CONSTANTS.BOARD_ID, board.id);
  }, []);

  return boardDispatch;
};
