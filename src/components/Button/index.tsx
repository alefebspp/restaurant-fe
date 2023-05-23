import { ButtonProps } from './interface';
import { Container } from './styles';

export const Button = ({ children, ...props }: ButtonProps) => {
  return <Container {...props}>{children}</Container>;
};
