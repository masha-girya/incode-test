import { BUTTON_CONSTANTS, INPUT_CONSTANTS } from 'src/constants';
import styles from './add-card-form.module.scss';
// import { Button } from '../button';

interface IProps {
  handleClose: () => void;
}

export const AddCardForm = ({ handleClose }: IProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLDivElement>) => {
    event.preventDefault();
    try {
      // some
    } catch {
      // some
    } finally {
      handleClose();
    }
  };

  return (
    <div className={styles.addCardForm} onSubmit={handleSubmit}>
      <button
        type="button"
        area-label={BUTTON_CONSTANTS.ariaLabels.close}
        className={styles.closeBtn}
        onClick={handleClose}
      >
        <div className={styles.closeBtn__cross}>+</div>
      </button>

      <form className={styles.addCardForm__form}>
        <label className={styles.field}>
          <p>{INPUT_CONSTANTS.labels.addInputTitle}</p>
          <input type="text" className={styles.field__input} />
        </label>

        <label className={styles.field}>
          <p>{INPUT_CONSTANTS.labels.addInputDesk}</p>
          <textarea />
        </label>

        {/* <Button name="submit" handleClick={() => {}} /> */}

        <input
          className={styles.submitBtn}
          type="submit"
          value={INPUT_CONSTANTS.values.submit}
        />
      </form>
    </div>
  );
};
