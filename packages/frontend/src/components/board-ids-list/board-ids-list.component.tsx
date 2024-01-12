import { useEffect } from 'react';
import { IBoardIds } from 'src/types';
import { getBoardIds } from 'src/api';
import { sendRequest } from 'src/utils';
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

  useEffect(() => {
    const loadBoardIds = async () => {
      const boardIdsData = await sendRequest(() => getBoardIds());

      if (boardIdsData) {
        setBoardIds(boardIdsData);
      }
    };

    loadBoardIds();
  }, []);

  return (
    <label>
      {INPUT_CONSTANTS.LABELS.CHOOSE_BOARD_ID}
      <select
        value={activeBoardId}
        onChange={(event) => setActiveBoardId(event.target.value)}
        className={styles.selection}
      >
        {[{ id: 'None' }, ...boardIds].map((boardId) => (
          <option key={boardId.id}>{boardId.id}</option>
        ))}
      </select>
    </label>
  );
};
