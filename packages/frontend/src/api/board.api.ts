import axios, { AxiosResponse } from 'axios';
import { IBoard, IBoardIds } from 'src/types';
import { API_ENDPOINT, API_ENDPOINT_ROUTES } from 'src/constants';
import { sendRequest } from 'src/utils';

export const getBoardIds = async () => {
  const boardIds: AxiosResponse<IBoardIds[]> = await sendRequest(() =>
    axios.get(`${API_ENDPOINT}/${API_ENDPOINT_ROUTES.allBoards}`),
  );

  if (boardIds) {
    return boardIds.data;
  }
};

export const getBoarById = async (id: string) => {
  const board: AxiosResponse<IBoard> = await sendRequest(() =>
    axios.get(`${API_ENDPOINT}/${API_ENDPOINT_ROUTES.board}/${id}`),
  );

  if (board) {
    return board.data;
  }
};

export const addBoard = async (name: string) => {
  const board: AxiosResponse<IBoard> = await sendRequest(() =>
    axios.post(`${API_ENDPOINT}/${API_ENDPOINT_ROUTES.board}`, { name }),
  );

  if (board) {
    return board.data;
  }
};

export const removeBoard = async (id: string) => {
  const board: AxiosResponse<boolean> = await sendRequest(() =>
    axios.delete(`${API_ENDPOINT}/${API_ENDPOINT_ROUTES.board}/${id}`),
  );

  if (board) {
    return board.data;
  }
};

export const editBoard = async (data: Partial<IBoard>) => {
  const response = await sendRequest(() =>
    axios.patch(
      `${API_ENDPOINT}/${API_ENDPOINT_ROUTES.board}/${data.id}`,
      data,
    ),
  );

  if (response) {
    return response.data;
  }
};
