import styled, { css } from 'styled-components';

export const Container = styled.button`
  ${({ theme }) => css`
    width: 100px;
    height: 34px;
    background-color: ${theme['green-300']};
    color: ${theme.white};
    border: 0;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background-color: ${theme['green-500']};
    }
    &:focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${props => props.theme['green-500']};
    }
  `}
`;
