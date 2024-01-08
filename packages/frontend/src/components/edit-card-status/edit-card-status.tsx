import { CardStatus } from '@/types';
import { BOARD_COLUMNS } from 'src/constants';

interface IProps {
  status: CardStatus;
  setStatus: React.Dispatch<React.SetStateAction<CardStatus>>;
}

export const EditCardStatus = (props: IProps) => {
  const { status, setStatus } = props;

  return (
    <fieldset>
      Status:
      {BOARD_COLUMNS.map((boardStatus) => (
        <div className="radio" key={boardStatus}>
          <label>
            <input
              type="radio"
              value={status}
              checked={boardStatus === status}
              onChange={() => setStatus(boardStatus)}
            />
            {boardStatus}
          </label>
        </div>
      ))}
    </fieldset>
  );
};
