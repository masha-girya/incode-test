import { PlusIcon } from 'src/components';
import { BUTTON_CONSTANTS } from 'src/constants';
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
