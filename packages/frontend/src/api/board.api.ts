import axios, { AxiosResponse } from 'axios';
import { IBoard, IBoardIds } from 'src/types';
import { API_ENDPOINT, API_ENDPOINT_ROUTES } from 'src/constants';
import { sendRequest } from 'src/utils';

export const getBoardIds = async () => {
  const boardIds: AxiosResponse<IBoardIds[]> = await sendRequest(() =>
    axios.get(`${API_ENDPOINT}/${API_ENDPOINT_ROUTES.allBoards}`),
  );

  return boardIds.data;
};

export const getBoarById = async (id: string) => {
  const board: AxiosResponse<IBoard> = await sendRequest(() =>
    axios.get(`${API_ENDPOINT}/${API_ENDPOINT_ROUTES.board}/${id}`),
  );

  return board.data;
};

export const addBoard = async (name: string) => {
  const board: AxiosResponse<IBoard> = await sendRequest(() =>
    axios.post(`${API_ENDPOINT}/${API_ENDPOINT_ROUTES.board}`, { name }),
  );

  return board.data;
};
