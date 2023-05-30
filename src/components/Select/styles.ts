import { CSSObjectWithLabel } from 'react-select';
import styled from 'styled-components';

interface SelectContainerProps {
  justifyContent: string;
}

export const StyledIndicatorsContainer = styled.div`
  background-color: ${({ theme }) => theme['green-700']};
  border: 1px solid ${({ theme }) => theme['green-700']};
`;

export const Container = styled.div<SelectContainerProps>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: ${({ justifyContent }) => justifyContent};
`;

export const customStyles = {
  control: (
    base: CSSObjectWithLabel,
    { isFocused }: { isFocused: boolean }
  ) => ({
    ...base,
    border: isFocused ? '1px solid #204f4a' : '1px solid #204f4a',
    boxShadow: 'none',
    '&:hover': {
      border: '1px solid #204f4a'
    }
  }),
  option: (
    base: CSSObjectWithLabel,
    { isSelected, isFocused }: { isFocused: boolean; isSelected: boolean }
  ) => ({
    ...base,
    height: '100%',
    backgroundColor: isSelected ? '#204f4a' : isFocused ? '#C4C4CC' : 'white',
    color: '#121214'
  })
};
