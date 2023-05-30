import { Dispatch, SetStateAction } from 'react';

export interface Schedule {
  id: string;
  opening_time: Date;
  closing_time: Date;
  day_of_week: number;
  restaurant_id: string;
}

export interface CreateScheduleProps {
  scheduleData: {
    opening_time: string;
    closing_time: string;
    day_of_week: number;
    restaurant_id: string | undefined;
  };
  setResponseError: Dispatch<SetStateAction<string | undefined>>;
}

export interface CheckRestaurantScheduleRequest {
  scheduleData: {
    restaurantId: string | undefined;
    date: string;
    opening_time: string;
    closing_time: string;
  };
}
