import classNames from 'classnames';
import styles from './button.module.scss';

interface IProps {
  name: string;
  handleClick: () => void;
  Icon?: JSX.Element;
  type?: 'button' | 'submit';
  ariaLabel?: string;
  isSmallIcon?: boolean;
}

export const Button = (props: IProps) => {
  const {
    name,
    handleClick,
    Icon,
    type = 'button',
    ariaLabel,
    isSmallIcon,
  } = props;

  return (
    <button
      type={type}
      onClick={handleClick}
      className={classNames(styles.button, {
        [styles.button_withIcon]: Icon,
        [styles.button_smallIcon]: isSmallIcon,
      })}
      aria-label={ariaLabel}
    >
      {Icon}
      {name}
    </button>
  );
};
