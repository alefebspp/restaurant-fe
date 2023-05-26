import api from '../api';

export const deleteRestaurantRequest = async (
  restaurantId: string | undefined
) => {
  try {
    const { data } = await api.delete(`/restaurants/${restaurantId}`);
  } catch (error) {
    console.log(error);
  }
};
