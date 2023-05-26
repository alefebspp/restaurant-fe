import api from '../api';
import { Restaurant } from './interface';

export const listRestaurantsRequest = async (): Promise<Restaurant[]> => {
  const { data } = await api.get('/restaurants');

  return data;
};
