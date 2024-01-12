import { useState } from 'react';
import { BoardColumn, Button } from 'src/components';
import { ICard } from 'src/types';
import { getCardsWithStatus } from 'src/utils';
import { BOARD_COLUMNS } from 'src/constants';
import styles from './board.mobile.module.scss';

interface IProps {
  cards: ICard[];
}

export const BoardMobile = ({ cards }: IProps) => {
  const [columnOnShow, setColumnOnShow] = useState(BOARD_COLUMNS[0]);

  return (
    <div className={styles.boardMobile}>
      <div className={styles.boardMobile__buttons}>
        {BOARD_COLUMNS.map((column) => (
          <Button
            key={column}
            name={column}
            isActive={column === columnOnShow}
            handleClick={() => setColumnOnShow(column)}
          />
        ))}
      </div>
      <BoardColumn
        cards={getCardsWithStatus(columnOnShow, cards)}
        column={columnOnShow}
      />
    </div>
  );
};
