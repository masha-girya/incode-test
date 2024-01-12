import { CardStatus } from 'src/types';
import { BOARD_COLUMNS } from 'src/constants';

interface IProps {
  status: CardStatus;
  setStatus: (key: 'title' | 'description' | 'status', event: any) => void;
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
              value={boardStatus}
              checked={boardStatus === status}
              onChange={(e) => setStatus('status', e.target.value)}
            />
            {boardStatus}
          </label>
        </div>
      ))}
    </fieldset>
  );
};
