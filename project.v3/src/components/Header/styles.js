import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  background-color: ${({ theme }) => theme.card};
  box-shadow: ${({ theme }) => theme.shadow};
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px; 
  cursor: pointer;
  transition: transform 0.2s ease;

   img {
    height: 32px; 
    width: auto;
    filter: brightness(0) saturate(100%) invert(26%) sepia(83%) 
    saturate(750%) hue-rotate(245deg) brightness(96%) contrast(92%);
    
  }
  
  &:hover {
    transform: scale(1.05);
  }
`;

export const LogoText = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  letter-spacing: -0.5px;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const NavItem = styled.div`
  cursor: pointer;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  
  svg {
    margin-right: 8px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 50%;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.border};
  }
`;

export const MobileMenuButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.card};
  padding: 16px;
  box-shadow: ${({ theme }) => theme.shadow};
  z-index: 99;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  
  @media (min-width: 768px) {
    display: none;
  }
`;