import { EmptyDataProps } from './interface';
import { Container, Title, SubTitle } from './styles';

export const EmptyData = ({ title, subtitle, children }: EmptyDataProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
      {children}
    </Container>
  );
};
