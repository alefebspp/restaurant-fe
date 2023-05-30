import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import {
  Container,
  Header,
  HeaderText,
  Form,
  SelectContainer,
  SelectLabel,
  InputsContainer,
  InputErrorText,
  InputContainer,
  ResponseText
} from './styles';
import { Button, Input, SelectComponent } from '../../../components';
import { listRestaurantsRequest } from '../../../services/restaurant-requests';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { checkScheduleSchema } from '../../../utils/schemas';
import { getStringFromDate } from '../../../utils/getStringFromDate';
import { checkRestaurantScheduleRequest } from '../../../services/schedules-requests';

interface Option {
  label: string;
  value: string;
}

export const CheckSchedule = () => {
  const [schedulesOptions, setSchedulesOptions] = useState<
    Option[] | undefined
  >();

  const [response, setResponse] = useState<boolean>();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(checkScheduleSchema)
  });

  const { data: restaurants } = useQuery({
    queryKey: ['restaurants'],
    queryFn: listRestaurantsRequest
  });

  useEffect(() => {
    const scheduleOptions: Option[] = [];

    restaurants?.forEach(restaurant => {
      scheduleOptions.push({ label: restaurant.name, value: restaurant.id });
    });

    setSchedulesOptions(scheduleOptions);
  }, []);

  console.log(response);

  return (
    <Container>
      <Header>
        <HeaderText>Check a restaurant schedule</HeaderText>
      </Header>
      <Form
        onSubmit={handleSubmit(async data => {
          setResponse(undefined);
          const response = await checkRestaurantScheduleRequest({
            scheduleData: {
              restaurantId: data.restaurant_id,
              date: getStringFromDate(data.date),
              opening_time: data.opening_time,
              closing_time: data.closing_time
            }
          });
          console.log(response.isOpen);
          setResponse(response.isOpen);
        })}
      >
        <InputsContainer>
          <InputContainer>
            <Input
              register={register}
              inputName="date"
              inputType="date"
              inputLabel="Date"
            />
            {errors.date && (
              <InputErrorText>{errors.date.message?.toString()}</InputErrorText>
            )}
          </InputContainer>

          <SelectContainer>
            <SelectLabel>Restaurant</SelectLabel>
            <SelectComponent
              placeholder="Restaurant"
              justifyContent="start"
              id="restaurant_id"
              name="restaurant_id"
              control={control}
              options={schedulesOptions}
            />
            {errors.restaurant_id && (
              <InputErrorText>
                {errors.restaurant_id.message?.toString()}
              </InputErrorText>
            )}
          </SelectContainer>
          <InputContainer>
            <Input
              register={register}
              inputName="opening_time"
              inputType="time"
              inputLabel="From"
            />
            {errors.opening_time && (
              <InputErrorText>
                {errors.opening_time.message?.toString()}
              </InputErrorText>
            )}
          </InputContainer>
          <InputContainer>
            <Input
              register={register}
              inputName="closing_time"
              inputType="time"
              inputLabel="To"
            />
            {errors.closing_time && (
              <InputErrorText>
                {errors.closing_time.message?.toString()}
              </InputErrorText>
            )}
          </InputContainer>
        </InputsContainer>
        <Button type="submit">Check</Button>
        {response != undefined &&
          (response ? (
            <ResponseText color="green">
              The restaurant will be open
            </ResponseText>
          ) : (
            <ResponseText color="red">
              The restaurant will be close
            </ResponseText>
          ))}
      </Form>
    </Container>
  );
};
