import { Button, PlusIcon } from 'src/components';
import { BUTTON_CONSTANTS } from 'src/constants';
import styles from './add-board.module.scss';

interface IProps {
  handleCreate: () => void;
}

export const AddBoard = (props: IProps) => {
  const { handleCreate } = props;

  return (
    <div className={styles.addBoard}>
      <Button
        name={BUTTON_CONSTANTS.names.addBoard}
        Icon={<PlusIcon />}
        handleClick={handleCreate}
      />
    </div>
  );
};
