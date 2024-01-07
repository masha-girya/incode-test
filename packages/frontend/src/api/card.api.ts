import axios from 'axios';
import { ICard, ICardRequest } from 'src/types';
import { API_ENDPOINT, API_ENDPOINT_ROUTES } from 'src/constants';

export const addCard = async (data: ICardRequest) => {
  try {
    const response = await axios.post(
      `${API_ENDPOINT}/${API_ENDPOINT_ROUTES.card}`,
      data,
    );

    return response.data;
  } catch (error) {
    console.error('error', error);
  }
};

export const editCard = async (data: ICard) => {
  try {
    const response = await axios.patch(
      `${API_ENDPOINT}/${API_ENDPOINT_ROUTES.card}/${data.id}`,
      data,
    );

    return response.data;
  } catch (error) {
    console.error('error', error);
  }
};

export const deleteCard = async (id: string) => {
  try {
    const response = await axios.delete(
      `${API_ENDPOINT}/${API_ENDPOINT_ROUTES.card}/${id}`,
    );

    return response.data;
  } catch (error) {
    console.error('error', error);
  }
};
