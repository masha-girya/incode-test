import styles from './add-card-field.module.scss';

interface IProps {
  children: React.ReactNode;
  name: string;
}
export const AddCardField = (props: IProps) => {
  const { name, children } = props;

  return (
    <label className={styles.field}>
      <p>{name}</p>
      {children}
    </label>
  );
};
