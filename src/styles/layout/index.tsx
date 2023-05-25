import {
  Container,
  ContentContainer,
  Header,
  HeaderIcon,
  HeaderText,
  HeaderLink,
  HeaderLinksSection,
  HeaderSection
} from './styles';
import { Outlet, useNavigate } from 'react-router-dom';

export const AppLayout = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header>
        <HeaderSection>
          <HeaderText>Restaurant Manager</HeaderText>
          <HeaderIcon />
        </HeaderSection>
        <HeaderLinksSection>
          <HeaderLink onClick={() => navigate('')}>Home</HeaderLink>
          <HeaderLink onClick={() => navigate('restaurants')}>
            Add restaurant
          </HeaderLink>
        </HeaderLinksSection>
      </Header>
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </Container>
  );
};
