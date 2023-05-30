import api from '../api';

export const deleteScheduleRequest = async (scheduleId: string | undefined) => {
  const { data } = await api.delete(`/schedules/${scheduleId}`);
};
