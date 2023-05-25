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
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const fakeRestaurants = [
    {
      id: 1,
      name: 'Restaurant 1',
      cnpj: '123',
      segment: 'sorveteria'
    },
    {
      id: 2,
      name: 'Restaurant 2',
      cnpj: '456',
      segment: 'pastelaria'
    }
  ];

  const navigate = useNavigate();

  return (
    <Container>
      <Header>
        <HeaderText>Restaurants</HeaderText>
      </Header>
      <RestaurantsList>
        {fakeRestaurants.map(restaurant => {
          return (
            <RestaurantContainer>
              <RestaurantTitle>{restaurant.name}</RestaurantTitle>
              <ActionsContainer>
                <IconButton
                  onClick={() => navigate(`schedules/${restaurant.id}`)}
                >
                  <ClockIcon />
                </IconButton>
                <IconButton>
                  <TrashIcon />
                </IconButton>
                <IconButton>
                  <NotePencilIcon />
                </IconButton>
              </ActionsContainer>
            </RestaurantContainer>
          );
        })}
      </RestaurantsList>
    </Container>
  );
};
