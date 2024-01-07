import { useEffect, useState } from 'react';
import { AddBoard, BoardIdsList, Search } from 'src/components';
import styles from './header.module.scss';

export const Header = () => {
  const boardIds = ['1', '2', '3'];
  const [query, setQuery] = useState('');
  const [activeBoardId, setActiveBoardId] = useState('None');

  const handleSearch = () => {
    // search
  };

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
        <AddBoard handleCreate={handleSearch} />
        <BoardIdsList
          boardIds={boardIds}
          activeBoardId={activeBoardId}
          setActiveBoardId={setActiveBoardId}
        />
      </div>
      <Search query={query} setQuery={setQuery} handleSearch={handleSearch} />
    </div>
  );
};
