import styled from 'styled-components';

export const SearchContainer = styled.form`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 400px;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px 40px 10px 16px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.border};
  background-color: ${({ theme }) => `${theme.background}`};
  color: ${({ theme }) => theme.text};
  font-size: 0.875rem;
  transition: all 0.2s ease;
  
  &:focus {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => `${theme.primary}30`};
  }
  
  &::placeholder {
    color: ${({ theme }) => `${theme.text}80`};
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  right: 8px;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;