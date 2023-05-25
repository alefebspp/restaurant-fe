import styled, { css } from 'styled-components';
import { Clock, Trash, NotePencil } from '@phosphor-icons/react';

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

export const RestaurantsList = styled.div`
  width: 80%;
  height: 100%;
  //border: 4px solid ${({ theme }) => theme['green-300']};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 10px 0;
`;

export const RestaurantContainer = styled.div`
  width: 50%;
  height: 10%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  border-bottom: 3px solid ${({ theme }) => theme['green-700']};
`;

export const RestaurantTitle = styled.p`
  color: ${({ theme }) => theme['gray-900']};
  font-size: 24px;
  font-weight: 300;
`;

export const ActionsContainer = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const IconButton = styled.button`
  border: 0;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme['green-700']};
  cursor: pointer;
  :hover {
    color: ${({ theme }) => theme['green-500']};
  }
`;

export const ClockIcon = styled(Clock).attrs(({ theme }) => ({
  size: 36
}))``;

export const TrashIcon = styled(Trash).attrs(({ theme }) => ({
  size: 36
}))``;

export const NotePencilIcon = styled(NotePencil).attrs(({ theme }) => ({
  size: 36
}))``;
