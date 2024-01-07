import { useCallback, useEffect } from 'react';
import { IBoardIds } from 'src/types';
import { getBoardIds } from 'src/api';
import { INPUT_CONSTANTS } from 'src/constants';
import styles from './board-ids-list.module.scss';

interface IProps {
  boardIds: IBoardIds[];
  setBoardIds: React.Dispatch<React.SetStateAction<IBoardIds[]>>;
  activeBoardId: string;
  setActiveBoardId: React.Dispatch<React.SetStateAction<string>>;
}

export const BoardIdsList = (props: IProps) => {
  const { boardIds, activeBoardId, setActiveBoardId, setBoardIds } = props;

  const loadBoardIds = useCallback(async () => {
    const boardIdsData = await getBoardIds();

    if (boardIdsData) {
      setBoardIds(boardIdsData);
    }
  }, []);

  useEffect(() => {
    loadBoardIds();
  }, []);

  return (
    <label>
      {INPUT_CONSTANTS.labels.boardSelection}
      <select
        value={activeBoardId}
        onChange={(event) => setActiveBoardId(event.target.value)}
        className={styles.selection}
      >
        {[{ id: 'None' }, ...boardIds].map((boardId) => (
          <option key={boardId.id} className={styles.selection__ids}>
            {boardId.id}
          </option>
        ))}
      </select>
    </label>
  );
};
