import api from '../api';
import { CreateRestaurantRequest } from './interface';

export const createRestaurantRequest = async (
  data: CreateRestaurantRequest
): Promise<void> => {
  try {
    await api.post('/restaurants', data);
  } catch (error) {
    console.log(error);
  }
};
