import styled, { css } from 'styled-components';

interface ResponseTextProps {
  color: string;
}

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
`;

export const Form = styled.form`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
  align-items: start;
`;

export const InputsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 15%;
  justify-content: space-between;
  align-items: start;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  align-items: start;
`;

export const InputErrorText = styled.p`
  font-size: 14px;
  color: red;
  font-weight: 500;
`;

export const Header = styled.div`
  width: 80%;
  height: 10%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const SelectContainer = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
`;

export const SelectLabel = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme['green-700']};
`;

export const HeaderText = styled.h1`
  font-size: 20px;
  color: ${({ theme }) => theme['green-500']};
  font-weight: 400;
`;

export const ResponseText = styled.h2<ResponseTextProps>`
  font-size: 20px;
  color: ${({ color }) => color};
  font-weight: 400;
`;
