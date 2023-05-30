import {
  Table,
  TableCell,
  TableHeader,
  TableHeaderText,
  TableRow,
  TableRowText,
  ActionsContainer,
  IconButton,
  DeleteIcon,
  UpdateIcon
} from './styles';
import { ScheduleTableProps } from '../interface';
import { formatDateTime } from '../../../utils/formateTime';
import { deleteScheduleRequest } from '../../../services/schedules-requests';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const dayOfWeekMap: Record<number, string> = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday'
};

export const SchedulesTable = ({ schedules }: ScheduleTableProps) => {
  const queryClient = useQueryClient();

  const { mutate: deleteSchedule } = useMutation({
    mutationFn: deleteScheduleRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['schedules'] });
    }
  });

  return (
    <Table>
      <thead>
        <TableRow>
          <TableHeader>
            <TableHeaderText>Day of the week</TableHeaderText>
          </TableHeader>
          <TableHeader>
            <TableHeaderText>From</TableHeaderText>
          </TableHeader>
          <TableHeader>
            <TableHeaderText>To</TableHeaderText>
          </TableHeader>
          <TableHeader>
            <TableHeaderText>Actions</TableHeaderText>
          </TableHeader>
        </TableRow>
      </thead>
      <tbody>
        {schedules?.map(({ day_of_week, opening_time, closing_time, id }) => (
          <TableRow key={id}>
            <TableCell>
              <TableRowText>{dayOfWeekMap[day_of_week]}</TableRowText>
            </TableCell>
            <TableCell>
              <TableRowText>
                {formatDateTime(new Date(opening_time))}
              </TableRowText>
            </TableCell>
            <TableCell>
              <TableRowText>
                {formatDateTime(new Date(closing_time))}
              </TableRowText>
            </TableCell>
            <TableCell>
              <ActionsContainer>
                <IconButton onClick={() => deleteSchedule(id)}>
                  <DeleteIcon />
                </IconButton>
              </ActionsContainer>
            </TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};
