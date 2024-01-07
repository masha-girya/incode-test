import { INPUT_CONSTANTS } from 'src/constants';
import styles from './board-ids-list.module.scss';

interface IProps {
  boardIds: string[];
  activeBoardId: string;
  setActiveBoardId: React.Dispatch<React.SetStateAction<string>>;
}

export const BoardIdsList = (props: IProps) => {
  const { boardIds, activeBoardId, setActiveBoardId } = props;

  return (
    <label>
      {INPUT_CONSTANTS.labels.boardSelection}
      <select
        value={activeBoardId}
        onChange={(event) => setActiveBoardId(event.target.value)}
        className={styles.selection}
      >
        {['None', ...boardIds].map((boardId) => (
          <option key={boardId} className={styles.selection__ids}>
            {boardId}
          </option>
        ))}
      </select>
    </label>
  );
};
