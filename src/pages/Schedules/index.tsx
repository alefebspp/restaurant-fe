import { useParams } from 'react-router-dom';
import { Container, Header, HeaderText, Form } from './styles';
import { useQuery } from '@tanstack/react-query';
import { findRestaurantRequest } from '../../services/restaurant-requests';

export const Schedules = () => {
  const { restaurantId } = useParams();

  const { data: restaurant } = useQuery({
    queryKey: ['restaurant'],
    queryFn: () => findRestaurantRequest(restaurantId)
  });

  return (
    <Container>
      <Header>
        <HeaderText>{restaurant?.name} Schedules</HeaderText>
      </Header>
      <Form></Form>
    </Container>
  );
};
