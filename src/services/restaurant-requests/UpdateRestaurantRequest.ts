import api from '../api';
import { UpdateRestaurantRequest } from './interface';

export const updateRestaurantRequest = async ({
  restaurantData,
  restaurantId
}: UpdateRestaurantRequest) => {
  const { data } = await api.patch(
    `/restaurants/${restaurantId}`,
    restaurantData
  );
};
