import React, { useState } from 'react';
import { AddBoard, Board, Search } from './components';
import { IBoardIds } from './types';
import styles from './App.module.scss';

function App() {
  const [boardIds, setBoardIds] = useState<IBoardIds[]>([]);

  return (
    <div className={styles.App}>
      <AddBoard setBoardIds={setBoardIds} />
      <Search boardIds={boardIds} setBoardIds={setBoardIds} />
      <Board />
    </div>
  );
}

export default App;
