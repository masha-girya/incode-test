import React, { useState } from 'react';
import { Board, Header } from './components';
import { MOCK_CARD_LIST } from './constants';
import styles from './App.module.scss';

function App() {
  const [board] = useState(MOCK_CARD_LIST);

  // const loadBoard = (id: string) => {
  // };

  return (
    <div className={styles.App}>
      <Header />
      {!board && <Board board={board} />}
    </div>
  );
}

export default App;
