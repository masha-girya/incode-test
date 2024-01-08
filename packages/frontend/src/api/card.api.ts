import axios from 'axios';
import { ICard, ICardRequest } from 'src/types';
import { API_ENDPOINT, API_ENDPOINT_ROUTES } from 'src/constants';
import { sendRequest } from 'src/utils';

export const addCard = async (data: ICardRequest) => {
  const response = await sendRequest(() =>
    axios.post(`${API_ENDPOINT}/${API_ENDPOINT_ROUTES.card}`, data),
  );

  return response.data;
};

export const editCard = async (data: ICard) => {
  const response = await sendRequest(() =>
    axios.patch(`${API_ENDPOINT}/${API_ENDPOINT_ROUTES.card}/${data.id}`, data),
  );

  return response.data;
};

export const deleteCard = async (id: string) => {
  const response = await sendRequest(() =>
    axios.delete(`${API_ENDPOINT}/${API_ENDPOINT_ROUTES.card}/${id}`),
  );

  return response.data;
};
