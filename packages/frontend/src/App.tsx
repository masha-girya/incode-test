import React, { useCallback, useEffect, useState } from 'react';
import { Board, Header } from './components';
import { getBoarById } from './api';
import { IBoard } from './types';
import styles from './App.module.scss';

function App() {
  const [board, setBoard] = useState<IBoard | null>(null);
  const [searchId, setSearchId] = useState('');

  const loadBoard = useCallback(async (id: string) => {
    const boardData = await getBoarById(id);

    if (boardData) {
      setBoard(boardData);
    }
  }, []);

  useEffect(() => {
    if (searchId.length !== 0) {
      loadBoard(searchId);
    }
  }, [searchId]);

  return (
    <div className={styles.App}>
      <Header setSearchId={setSearchId} loadBoard={loadBoard} />
      {board && <Board board={board} loadBoard={loadBoard} />}
    </div>
  );
}

export default App;
