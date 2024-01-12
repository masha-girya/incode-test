import classNames from 'classnames';
import styles from './button.module.scss';

interface IProps {
  handleClick: () => void;
  name?: string;
  Icon?: JSX.Element;
  type?: 'button' | 'submit';
  ariaLabel?: string;
  isSmallIcon?: boolean;
  isActive?: boolean;
  isCloseButton?: boolean;
}

export const Button = (props: IProps) => {
  const {
    name = '',
    handleClick,
    Icon,
    type = 'button',
    ariaLabel,
    isSmallIcon,
    isActive,
    isCloseButton,
  } = props;

  return (
    <button
      type={type}
      onClick={handleClick}
      className={classNames(styles.button, {
        [styles.button_withIcon]: Icon,
        [styles.button_smallIcon]: isSmallIcon,
        [styles.button_active]: isActive,
        [styles.button_closeBtn]: isCloseButton,
      })}
      aria-label={ariaLabel}
    >
      {isCloseButton && <div className={styles.button_closeBtn__cross}>+</div>}
      {Icon}
      {name}
    </button>
  );
};
