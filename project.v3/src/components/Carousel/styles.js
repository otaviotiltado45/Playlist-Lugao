import styled from 'styled-components';

export const CarouselContainer = styled.div`
  position: relative;
  margin: 32px 0;
  width: 100%;
`;

export const TitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding: 0 24px;
`;

export const CarouselTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const CarouselContent = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 8px;
  padding: 12px 24px;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  scrollbar-width: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ScrollButton = styled.button`
  position: absolute;
  top: 50%;
  ${({ direction }) => direction === 'left' ? 'left: 0;' : 'right: 0;'}
  transform: translateY(-50%);
  background-color: ${({ theme }) => `${theme.card}cc`};
  color: ${({ theme }) => theme.text};
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 10;
  
  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: white;
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 64px 0;
  color: ${({ theme }) => `${theme.text}80`};
  
  svg {
    margin-bottom: 16px;
    opacity: 0.6;
  }
`;

export const AddMusicButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  border-radius: 20px;
  padding: 8px 16px;
  font-weight: 500;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.secondary};
    transform: translateY(-2px);
  }
`;