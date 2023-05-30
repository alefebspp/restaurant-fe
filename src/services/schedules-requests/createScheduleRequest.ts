import { isAxiosError } from 'axios';
import api from '../api';
import { CreateScheduleProps } from './interface';

export const createScheduleRequest = async ({
  scheduleData,
  setResponseError
}: CreateScheduleProps) => {
  try {
    const { data } = await api.post('/schedules', scheduleData);
  } catch (error) {
    if (isAxiosError(error)) {
      setResponseError(error.response?.data.message);
    }
  }
};
