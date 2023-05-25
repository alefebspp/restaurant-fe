import styled, { css } from 'styled-components';

interface InputContainerProps {
  width: string;
}

export const Container = styled.div<InputContainerProps>`
  width: ${props => props.width};
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  ${({ theme }) => css`
    border: 0;
    border-bottom: 2px solid ${theme['green-700']};
    color: ${theme['gray-900']};
    height: 40px;
    background-color: transparent;
    padding: 0 10px;
    &:focus {
      outline: 0;
      box-shadow: 0;
    }
  `}
`;

export const InputLabel = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme['green-700']};
`;
