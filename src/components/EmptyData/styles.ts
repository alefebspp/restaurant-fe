import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const Title = styled.h1`
  font-size: 30px;
  color: ${({ theme }) => theme['green-700']};
  font-weight: 700;
`;

export const SubTitle = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme['green-700']};
  font-weight: 500;
`;
