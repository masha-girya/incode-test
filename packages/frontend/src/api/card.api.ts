import axios from 'axios';
import { ICard, ICardRequest } from 'src/types';
import { API_ENDPOINT, API_ENDPOINT_ROUTES } from 'src/constants';
import { sendRequest } from 'src/utils';

export const addCard = async (data: ICardRequest) => {
  const response = await sendRequest(() =>
    axios.post(`${API_ENDPOINT}/${API_ENDPOINT_ROUTES.CARD}`, data),
  );

  if (response) {
    return response.data;
  }
};

export const editCard = async (data: Partial<ICard>) => {
  const response = await sendRequest(() =>
    axios.patch(`${API_ENDPOINT}/${API_ENDPOINT_ROUTES.CARD}/${data.id}`, data),
  );

  if (response) {
    return response.data;
  }
};

export const deleteCard = async (id: string) => {
  const response = await sendRequest(() =>
    axios.delete(`${API_ENDPOINT}/${API_ENDPOINT_ROUTES.CARD}/${id}`),
  );

  if (response) {
    return response.data;
  }
};
