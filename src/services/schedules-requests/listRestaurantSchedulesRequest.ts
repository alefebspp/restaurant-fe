import api from '../api';
import { Schedule } from './interface';

export const listRestaurantSchedulesRequest = async (
  restaurantId: string | undefined
) => {
  try {
    const { data } = await api.get(`/schedules/restaurant/${restaurantId}`);

    return data;
  } catch (error) {
    console.log(error);
  }
};
