import React from 'react';
import { Board } from './components';
import style from './App.module.scss';

function App() {
  return (
    <div className={style.App}>
      <Board />
    </div>
  );
}

export default App;
