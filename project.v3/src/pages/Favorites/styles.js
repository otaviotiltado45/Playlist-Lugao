import styled from 'styled-components';

export const FavoritesContainer = styled.div`
  padding: 24px;
  max-width: 1280px;
  margin: 0 auto;
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 64px 0;
  text-align: center;
  color: ${({ theme }) => `${theme.text}80`};
  
  svg {
    margin-bottom: 16px;
    opacity: 0.6;
  }
  
  h3 {
    margin-bottom: 8px;
    font-size: 1.25rem;
  }
  
  p {
    max-width: 400px;
    font-size: 0.875rem;
  }
`;