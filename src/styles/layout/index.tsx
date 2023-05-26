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
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

export const AppLayout = () => {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  return (
    <Container>
      <Header>
        <HeaderSection>
          <HeaderText>Restaurant Manager</HeaderText>
          <HeaderIcon />
        </HeaderSection>
        <HeaderLinksSection>
          <HeaderLink active={pathname == '/'} onClick={() => navigate('')}>
            Home
          </HeaderLink>
          <HeaderLink
            active={pathname == '/restaurants'}
            onClick={() => navigate('restaurants')}
          >
            Register
          </HeaderLink>
        </HeaderLinksSection>
      </Header>
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </Container>
  );
};
