import { EditIcon, TrashIcon } from 'src/components';
import { ICard } from 'src/types';
import { BUTTON_CONSTANTS } from 'src/constants';
import styles from './card.module.scss';

interface IProps {
  cardInfo: ICard;
}

export const Card = ({ cardInfo }: IProps) => {
  const { title, description } = cardInfo;

  return (
    <div className={styles.card}>
      <div className={styles.card__info}>
        <h4 className={styles.card__info__title}>{title}</h4>
        <p className={styles.card__info__desc}>{description}</p>
      </div>
      <div className={styles.card__buttons}>
        <button
          type="button"
          aria-label={BUTTON_CONSTANTS.ariaLabels.edit}
          className={styles.card__buttons__edit}
        >
          <EditIcon />
        </button>
        <button
          type="button"
          aria-label={BUTTON_CONSTANTS.ariaLabels.delete}
          className={styles.card__buttons__delete}
        >
          <TrashIcon />
        </button>
      </div>
    </div>
  );
};
