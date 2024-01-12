import { BUTTON_CONSTANTS, CONTENT_CONSTANTS } from 'src/constants';
import { Button } from 'src/components';
import styles from './delete-card-plug.module.scss';

interface IProps {
  handleClose: () => void;
  handleDelete: () => void;
}

export const DeleteCardPlug = (props: IProps) => {
  const { handleClose, handleDelete } = props;

  return (
    <div className={styles.deletePlug}>
      <p className={styles.deletePlug__text}>{CONTENT_CONSTANTS.DELETE_CARD}</p>

      <div className={styles.deletePlug__buttons}>
        <Button name={BUTTON_CONSTANTS.NAMES.YES} handleClick={handleDelete} />
        <Button name={BUTTON_CONSTANTS.NAMES.NO} handleClick={handleClose} />
      </div>
    </div>
  );
};
