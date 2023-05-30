import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import {
  Container,
  Header,
  HeaderText,
  SchedulesTableContainer,
  Form,
  FormContainer,
  FormContentContainer,
  FormTitle,
  PlusIcon,
  AddScheduleButton,
  ScheduleErrorText
} from './styles';
import { Input, SelectComponent } from '../../components';
import { findRestaurantRequest } from '../../services/restaurant-requests';
import {
  createScheduleRequest,
  listRestaurantSchedulesRequest
} from '../../services/schedules-requests';
import { SchedulesTable } from './SchedulesTable';
import { daysOptions } from './selectOptions';
import { createScheduleSchema } from '../../utils/schemas';
import { yupResolver } from '@hookform/resolvers/yup';

export const Schedules = () => {
  const { restaurantId } = useParams();

  const [responseError, setResponseError] = useState<string | undefined>();

  const queryClient = useQueryClient();

  const { data: restaurant } = useQuery({
    queryKey: ['restaurant'],
    queryFn: () => findRestaurantRequest(restaurantId)
  });

  const { data: schedules } = useQuery({
    queryKey: ['schedules'],
    queryFn: () => listRestaurantSchedulesRequest(restaurantId)
  });

  const { mutateAsync: createSchedule } = useMutation({
    mutationFn: createScheduleRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['schedules'] });
    }
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
    reset,
    watch,
    getValues,
    clearErrors
  } = useForm({
    resolver: yupResolver(createScheduleSchema)
  });

  useEffect(() => {
    const openingTime = getValues('opening_time');
    const closingTime = getValues('closing_time');
    const openingTimeNumber = openingTime.split(':').map(Number);
    const closingTimeNumber = closingTime.split(':').map(Number);

    if (openingTimeNumber[0] < closingTimeNumber[0]) {
      clearErrors('opening_time');
    }
  }, [watch('opening_time'), watch('closing_time')]);

  return (
    <Container>
      <Header>
        <HeaderText>{restaurant?.name} Schedules</HeaderText>
      </Header>
      <SchedulesTableContainer>
        <Form
          onSubmit={handleSubmit(async data => {
            setResponseError(undefined);
            await createSchedule({
              scheduleData: {
                day_of_week: data.day_of_week,
                opening_time: data.opening_time,
                closing_time: data.closing_time,
                restaurant_id: restaurantId
              },
              setResponseError
            });

            reset();
          })}
        >
          <FormTitle>Register a schedule:</FormTitle>
          <FormContainer>
            <FormContentContainer>
              <SelectComponent
                placeholder="Select a day"
                justifyContent="flex-end"
                control={control}
                name="day_of_week"
                options={daysOptions}
                id="day_of_week"
              />
              {errors.day_of_week && (
                <ScheduleErrorText>
                  {errors.day_of_week.message?.toString()}
                </ScheduleErrorText>
              )}
            </FormContentContainer>
            <FormContentContainer>
              <Input
                register={register}
                inputLabel="From"
                inputName="opening_time"
                inputType="time"
                min="01:00"
                max="00:59"
              />
              {errors.opening_time && (
                <ScheduleErrorText>
                  {errors.opening_time.message?.toString()}
                </ScheduleErrorText>
              )}
            </FormContentContainer>
            <FormContentContainer>
              <Input
                register={register}
                inputLabel="To"
                inputName="closing_time"
                inputType="time"
                min="01:00"
                max="00:59"
              />
              {errors.closing_time && (
                <ScheduleErrorText>
                  {errors.closing_time.message?.toString()}
                </ScheduleErrorText>
              )}
            </FormContentContainer>
            <FormContentContainer>
              <AddScheduleButton>
                <PlusIcon />
              </AddScheduleButton>
            </FormContentContainer>
          </FormContainer>
        </Form>
        {responseError && (
          <ScheduleErrorText>{responseError}</ScheduleErrorText>
        )}
        <SchedulesTable schedules={schedules} />
      </SchedulesTableContainer>
    </Container>
  );
};
