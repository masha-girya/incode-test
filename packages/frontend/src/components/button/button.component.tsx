import classNames from 'classnames';
import styles from './button.module.scss';

interface IProps {
  name: string;
  handleClick: () => void;
  Icon?: JSX.Element;
  type?: 'button' | 'submit';
}

export const Button = (props: IProps) => {
  const { name, handleClick, Icon, type = 'button' } = props;

  return (
    <button
      type={type}
      onClick={handleClick}
      className={classNames(styles.button, {
        [styles.button_withIcon]: Icon,
      })}
    >
      {Icon}
      {name}
    </button>
  );
};
