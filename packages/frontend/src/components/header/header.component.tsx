import { useCallback, useEffect, useState } from 'react';
import { AddBoard, BoardIdsList, Search } from 'src/components';
import { IBoardIds } from 'src/types';
import { addBoard } from 'src/api';
import styles from './header.module.scss';

interface IProps {
  setSearchId: React.Dispatch<React.SetStateAction<string>>;
  loadBoard: (id: string) => Promise<void>;
}

export const Header = (props: IProps) => {
  const { setSearchId, loadBoard } = props;

  const [boardIds, setBoardIds] = useState<IBoardIds[]>([]);
  const [query, setQuery] = useState('');
  const [activeBoardId, setActiveBoardId] = useState('None');

  const handleSearch = () => {
    setSearchId(query);
    setQuery('');
    setActiveBoardId('None');
  };

  const createBoard = useCallback(async () => {
    const board = await addBoard();

    if (board) {
      loadBoard(board.id);

      const newBoardIds = [{ id: board.id }, ...boardIds];
      setBoardIds(newBoardIds);
    }
  }, [boardIds]);

  useEffect(() => {
    if (activeBoardId === 'None') {
      setQuery('');
    } else {
      setQuery(activeBoardId);
    }
  }, [activeBoardId]);

  return (
    <div>
      <div className={styles.header}>
        <AddBoard handleCreate={createBoard} />
        <BoardIdsList
          boardIds={boardIds}
          setBoardIds={setBoardIds}
          activeBoardId={activeBoardId}
          setActiveBoardId={setActiveBoardId}
        />
      </div>
      <Search query={query} setQuery={setQuery} handleSearch={handleSearch} />
    </div>
  );
};
