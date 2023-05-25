import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
`;

export const Header = styled.div`
  width: 80%;
  height: 10%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const HeaderText = styled.h1`
  font-size: 20px;
  color: ${({ theme }) => theme['green-500']};
  font-weight: 400;
`;

export const Form = styled.form`
  width: 80%;
  height: 80%;
  //border: 4px solid ${({ theme }) => theme['green-300']};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 4px;
  padding: 10px 0;
`;
