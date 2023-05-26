import api from '../api';
import { Restaurant } from './interface';

export const findRestaurantRequest = async (
  restaurantId: string | undefined
): Promise<Restaurant> => {
  const { data } = await api.get(`/restaurants/${restaurantId}`);

  return data;
};
