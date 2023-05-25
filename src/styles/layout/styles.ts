import styled from 'styled-components';
import { Storefront } from '@phosphor-icons/react';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const Header = styled.div`
  width: 100%;
  height: 10vh;
  border-bottom: 4px solid ${({ theme }) => theme['green-300']};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6px;
`;

export const HeaderText = styled.h1`
  font-size: 40px;
  color: ${({ theme }) => theme['gray-900']};
  font-weight: 700;
`;

export const HeaderLink = styled.p`
  cursor: pointer;
  font-size: 20px;
  color: ${({ theme }) => theme['green-700']};
  &:hover {
    color: ${({ theme }) => theme['green-500']};
  }
`;
export const HeaderLinksSection = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const HeaderSection = styled.div`
  /* width: 40%;
  height: 100%; */
  padding-left: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;

export const HeaderIcon = styled(Storefront).attrs(({ theme }) => ({
  size: 56,
  color: theme['green-500']
}))``;
