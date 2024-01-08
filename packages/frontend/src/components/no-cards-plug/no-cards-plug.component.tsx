import { CardStatus } from 'src/types';
import { CONTENT_CONSTANTS } from 'src/constants';
import styles from './no-cards-plug.module.scss';

interface IProps {
  column: CardStatus;
}

export const NoCardsPlug = ({ column }: IProps) => {
  if (column === CardStatus.TODO) {
    return <></>;
  } else {
    return <p className={styles.noCardsPlug}>{CONTENT_CONSTANTS.noCards}</p>;
  }
};
