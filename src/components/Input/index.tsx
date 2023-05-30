import { useRef } from 'react';
import { InputProps } from './interface';
import { Container, StyledInput, InputLabel } from './styles';

export const Input = ({
  inputType = 'text',
  width = '100%',
  inputLabel,
  inputName,
  register,
  ...props
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputRef.current) {
      console.log('test!');
      inputRef.current.focus();
    }
  };

  return (
    <Container onClick={handleClick} width={width}>
      <InputLabel>{inputLabel}</InputLabel>
      <StyledInput
        type={inputType}
        autoComplete="off"
        {...(register && register(inputName || ''))}
        {...props} // exclua 'ref' desta propriedade
      />
    </Container>
  );
};
