import { Button } from '../button';
import { BUTTON_CONSTANTS } from 'src/constants';
import styles from './search.module.scss';

interface IProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: () => void;
}

export const Search = (props: IProps) => {
  const { query, setQuery, handleSearch } = props;

  return (
    <div className={styles.search}>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={styles.search__input}
      />
      <Button name={BUTTON_CONSTANTS.names.search} handleClick={handleSearch} />
    </div>
  );
};
