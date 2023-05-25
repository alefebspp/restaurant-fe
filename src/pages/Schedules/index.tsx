import { useParams } from 'react-router-dom';
import { Container, Header, HeaderText, Form } from './styles';

export const Schedules = () => {
  const { restaurantId } = useParams();

  console.log('RESTAURANT ID:', restaurantId);

  return (
    <Container>
      <Header>
        <HeaderText>Schedules</HeaderText>
      </Header>
      <Form></Form>
    </Container>
  );
};
