import { getBoarById } from 'src/api';
import { useCallback } from 'react';
import { sendRequest, useBoardDispatch } from 'src/utils';

export const useBoardRequest = () => {
  const boardDispatch = useBoardDispatch();

  const loadBoard = useCallback(async (id: string) => {
    const boardData = await sendRequest(() => getBoarById(id));

    if (boardData) {
      boardDispatch(boardData);
    }
  }, []);

  return loadBoard;
};
