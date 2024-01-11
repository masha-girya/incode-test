import { useEffect } from 'react';
import { BoardDroppable, BoardInfo, DeleteBoard } from 'src/components';
import { useAppSelector } from 'src/store';
import { useBoardRequest } from 'src/utils';
import styles from './board.module.scss';

export const Board = () => {
  const { board, boardId } = useAppSelector((state) => state.board);

  const loadBoard = useBoardRequest();

  useEffect(() => {
    if (boardId.length > 0) {
      loadBoard(boardId);
    }
  }, [boardId]);

  return board ? (
    <div className={styles.board}>
      <BoardInfo board={board} />
      <DeleteBoard />
      <BoardDroppable board={board} />
    </div>
  ) : (
    <></>
  );
};
