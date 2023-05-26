import {
  Container,
  Header,
  HeaderText,
  Form,
  InputContainer,
  InputTextError
} from './styles';
import { Input, Button } from '../../components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { createRestaurantSchemema } from '../../utils/schemas';
import {
  createRestaurantRequest,
  findRestaurantRequest,
  updateRestaurantRequest
} from '../../services/restaurant-requests';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Restaurant as RestaurantType } from '../../services/restaurant-requests/interface';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const Restaurant = () => {
  const { restaurantId } = useParams();
  const [registeredRestaurant, setRegisteredRestaurant] =
    useState<RestaurantType>();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset
  } = useForm({
    resolver: yupResolver(createRestaurantSchemema)
  });

  const handleFindRestaurant = async () => {
    const restaurant = await findRestaurantRequest(restaurantId);
    setRegisteredRestaurant(restaurant);
  };

  useEffect(() => {
    if (restaurantId) {
      handleFindRestaurant();
    }
  }, []);

  useEffect(() => {
    if (!restaurantId) {
      setRegisteredRestaurant(undefined);
      reset();
    }
  }, [restaurantId, reset]);

  useEffect(() => {
    if (restaurantId) {
      setValue('name', registeredRestaurant?.name);
      setValue('cnpj', registeredRestaurant?.cnpj);
      setValue('segment', registeredRestaurant?.segment);
    }
  }, [registeredRestaurant]);

  const queryClient = useQueryClient();

  const { mutateAsync: updateRestaurant } = useMutation({
    mutationFn: updateRestaurantRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['restaurants'] });
    }
  });

  const navigate = useNavigate();

  return (
    <Container>
      <Header>
        <HeaderText>
          {restaurantId ? 'Update' : 'Register'} restaurant
        </HeaderText>
      </Header>
      <Form
        onSubmit={handleSubmit(async data => {
          if (restaurantId) {
            await updateRestaurant({
              restaurantData: {
                name: data.name,
                cnpj: data.cnpj,
                segment: data.segment
              },
              restaurantId
            });
            navigate('/');
            return;
          }
          await createRestaurantRequest({
            name: data.name,
            cnpj: data.cnpj,
            segment: data.segment
          });
          navigate('/');
        })}
      >
        <InputContainer>
          <Input
            register={register}
            inputName="name"
            inputLabel="Name"
            width="100%"
          />
          {errors.name && (
            <InputTextError>{errors.name.message?.toString()}</InputTextError>
          )}
        </InputContainer>
        <InputContainer>
          <Input
            register={register}
            inputName="cnpj"
            inputLabel="CNPJ"
            width="100%"
          />
          {errors.cnpj && (
            <InputTextError>{errors.cnpj.message?.toString()}</InputTextError>
          )}
        </InputContainer>
        <InputContainer>
          <Input
            register={register}
            inputName="segment"
            inputLabel="Segment"
            width="100%"
          />
          {errors.segment && (
            <InputTextError>
              {errors.segment.message?.toString()}
            </InputTextError>
          )}
        </InputContainer>

        <Button type="submit">{restaurantId ? 'Update' : 'Register'}</Button>
      </Form>
    </Container>
  );
};
