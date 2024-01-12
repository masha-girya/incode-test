import { useEffect, useState } from 'react';
import { Button, BoardIdsList, Input } from 'src/components';
import { IBoardIds } from 'src/types';
import { BUTTON_CONSTANTS, INPUT_CONSTANTS } from 'src/constants';
import { useBoardRequest } from 'src/utils';
import styles from './search.module.scss';

interface IProps {
  boardIds: IBoardIds[];
  setBoardIds: React.Dispatch<React.SetStateAction<IBoardIds[]>>;
}

export const Search = (props: IProps) => {
  const { boardIds, setBoardIds } = props;

  const loadBoard = useBoardRequest();

  const [activeBoardId, setActiveBoardId] = useState('None');
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim().length > 0) {
      loadBoard(query);
    }

    setQuery('');
    setActiveBoardId('None');
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
      <form className={styles.search} onSubmit={(e) => e.preventDefault()}>
        <div className={styles.search__input}>
          <Input
            type="search"
            placeholder={INPUT_CONSTANTS.PLACEHOLDERS.SEARCH_BOARD}
            value={query}
            handleChange={setQuery}
          />
        </div>
        <BoardIdsList
          boardIds={boardIds}
          setBoardIds={setBoardIds}
          activeBoardId={activeBoardId}
          setActiveBoardId={setActiveBoardId}
        />
        <div className={styles.search__buttonWrapper}>
          <Button
            type="submit"
            name={BUTTON_CONSTANTS.NAMES.SEARCH}
            handleClick={handleSearch}
          />
        </div>
      </form>
    </div>
  );
};
