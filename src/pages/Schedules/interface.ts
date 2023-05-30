export interface Schedule {
  id: string;
  day_of_week: number;
  opening_time: string;
  closing_time: string;
  restaurant_id: string;
}

export interface ScheduleTableProps {
  schedules: Schedule[];
}
