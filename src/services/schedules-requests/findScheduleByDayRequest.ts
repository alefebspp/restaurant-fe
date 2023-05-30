import api from '../api';

export const findScheduleByDay = async (
  restaurantId: string | undefined,
  day: number | undefined
) => {
  try {
    const { data } = await api.get(
      `/schedules/week/${restaurantId}?day=${day}`
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};
