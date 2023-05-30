import styled from 'styled-components';
import { Trash, NotePencil } from '@phosphor-icons/react';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid ${({ theme }) => theme['green-700']};
  width: 33.33%;
`;

export const TableHeaderText = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme['green-700']};
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: ${({ theme }) => theme['white']};
  }
`;

export const TableRowText = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme['green-700']};
`;

export const TableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ccc;
  width: 33.33%;
`;

export const ActionsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
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

export const DeleteIcon = styled(Trash).attrs(({ theme }) => ({
  size: 26
}))``;

export const UpdateIcon = styled(NotePencil).attrs(({ theme }) => ({
  size: 26
}))``;
