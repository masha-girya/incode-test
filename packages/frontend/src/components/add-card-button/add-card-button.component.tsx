import { BUTTON_CONSTANTS } from '../../constants';
import { PlusIcon } from '../icons';
import styles from './add-card-button.module.scss';

interface IProps {
  handleClick: () => void;
}

export const AddCardButton = ({ handleClick }: IProps) => {
  return (
    <button
      type="button"
      aria-label={BUTTON_CONSTANTS.ariaLabels.add}
      className={styles.addButton}
      onClick={handleClick}
    >
      <PlusIcon />
    </button>
  );
};
