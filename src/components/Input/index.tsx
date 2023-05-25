import { InputProps } from './interface';
import { Container, StyledInput, InputLabel } from './styles';

export const Input = ({
  width = '100%',
  inputLabel,
  inputName,
  register
}: InputProps) => {
  return (
    <Container width={width}>
      <InputLabel>{inputLabel}</InputLabel>
      <StyledInput {...(register && register(inputName || ''))} />
    </Container>
  );
};
