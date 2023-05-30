import api from '../api';
import { CheckRestaurantScheduleRequest } from './interface';

export const checkRestaurantScheduleRequest = async ({
  scheduleData
}: CheckRestaurantScheduleRequest) => {
  try {
    const { data } = await api.get(
      `/schedules/${scheduleData.restaurantId}/availability/?date=${scheduleData.date}&opening_time=${scheduleData.opening_time}&closing_time=${scheduleData.closing_time}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
