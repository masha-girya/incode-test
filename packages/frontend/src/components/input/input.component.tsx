import styles from './input.module.scss';

interface IProps {
  value: string;
  handleChange: (value: string) => void;
  type?: 'search' | 'text' | 'submit';
  placeholder?: string;
}

export const Input = (props: IProps) => {
  const { type = 'text', value, placeholder, handleChange } = props;

  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => handleChange(e.target.value)}
      className={styles.input}
    />
  );
};
