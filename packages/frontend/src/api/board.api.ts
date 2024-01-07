import axios, { AxiosResponse } from 'axios';
import { IBoard, IBoardIds } from 'src/types';
import { API_ENDPOINT, API_ENDPOINT_ROUTES } from 'src/constants';

export const getBoardIds = async () => {
  try {
    const boardIds: AxiosResponse<IBoardIds[]> = await axios.get(
      `${API_ENDPOINT}/${API_ENDPOINT_ROUTES.allBoards}`,
    );

    return boardIds.data;
  } catch (error) {
    console.error('error', error);
  }
};

export const getBoarById = async (id: string) => {
  try {
    const board: AxiosResponse<IBoard> = await axios.get(
      `${API_ENDPOINT}/${API_ENDPOINT_ROUTES.board}/${id}`,
    );

    return board.data;
  } catch (error) {
    console.error('error', error);
  }
};

export const addBoard = async () => {
  try {
    const board: AxiosResponse<IBoard> = await axios.post(
      `${API_ENDPOINT}/${API_ENDPOINT_ROUTES.board}`,
    );

    return board.data;
  } catch (error) {
    console.error('error', error);
  }
};
