import {
  HeaderText,
  Container,
  Header,
  RestaurantsList,
  RestaurantContainer,
  RestaurantTitle,
  ActionsContainer,
  ClockIcon,
  NotePencilIcon,
  TrashIcon,
  IconButton
} from './styles';
import { Button, EmptyData } from '../../components';
import { useNavigate } from 'react-router-dom';
import {
  listRestaurantsRequest,
  deleteRestaurantRequest
} from '../../services/restaurant-requests';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export const Home = () => {
  const queryClient = useQueryClient();

  const { data: restaurants } = useQuery({
    queryKey: ['restaurants'],
    queryFn: listRestaurantsRequest
  });

  const { mutate: deleteRestaurant } = useMutation({
    mutationFn: deleteRestaurantRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['restaurants'] });
    }
  });

  const navigate = useNavigate();

  const isDataEmpty = restaurants?.length == 0;

  return (
    <Container>
      <Header>
        <HeaderText>Restaurants</HeaderText>
      </Header>
      <RestaurantsList>
        {isDataEmpty ? (
          <EmptyData
            title="There are no registered restaurants..."
            subtitle="Register a new one!"
          >
            <Button onClick={() => navigate('/restaurants')}>Register</Button>
          </EmptyData>
        ) : (
          restaurants?.map(restaurant => {
            return (
              <RestaurantContainer key={restaurant.id}>
                <RestaurantTitle>{`${restaurant.name} - ${restaurant.segment}`}</RestaurantTitle>
                <ActionsContainer>
                  <IconButton
                    onClick={() => navigate(`schedules/${restaurant.id}`)}
                  >
                    <ClockIcon />
                  </IconButton>
                  <IconButton onClick={() => deleteRestaurant(restaurant.id)}>
                    <TrashIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => navigate(`restaurants/${restaurant.id}`)}
                  >
                    <NotePencilIcon />
                  </IconButton>
                </ActionsContainer>
              </RestaurantContainer>
            );
          })
        )}
      </RestaurantsList>
    </Container>
  );
};
