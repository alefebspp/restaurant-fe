import styled, { css } from 'styled-components';
import { ClockCountdown } from '@phosphor-icons/react';
import { Button } from '../../components';

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
  width: 100%;
  height: 20%;
  border-bottom: 1px solid ${({ theme }) => theme['green-700']};
  display: flex;
  flex-direction: column;
`;

export const FormTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme['green-700']};
`;

export const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FormContentContainer = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 20px 10px 20px;
`;

export const SchedulesTableContainer = styled.div`
  width: 80%;
  height: 80%;
  //border: 4px solid ${({ theme }) => theme['green-300']};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 4px;
  padding: 10px 0;
`;

export const ScheduleErrorText = styled.p`
  font-size: 14px;
  color: red;
  font-weight: 500;
`;

export const AddScheduleButton = styled(Button)`
  cursor: pointer;
  width: 30%;
  height: 40%;
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme['green-700']};
  border-radius: 5px;
  &:hover {
    background-color: ${({ theme }) => theme['green-500']};
  }
`;

export const PlusIcon = styled(ClockCountdown).attrs(({ theme }) => ({
  size: 26,
  color: theme['white']
}))``;
