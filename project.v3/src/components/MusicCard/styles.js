import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const CardContainer = styled.div`
  position: relative;
  width: 220px;
  flex-shrink: 0; 
  border-radius: 12px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.card};
  box-shadow: ${({ theme }) => theme.shadow};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }
`;


export const AlbumCover = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  transition: all 0.3s ease;
  
  ${CardContainer}:hover & {
    filter: brightness(0.8);
  }
`;

export const MusicInfo = styled.div`
  padding: 16px;
`;

export const Title = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Artist = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.text}aa;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const GenreTag = styled.span`
  font-size: 0.75rem;
  background-color: ${({ theme }) => `${theme.primary}20`};
  color: ${({ theme }) => theme.primary};
  padding: 2px 8px;
  border-radius: 12px;
`;

export const Year = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.text}80;
`;

export const ButtonsContainer = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  animation: ${fadeIn} 0.2s ease forwards;
`;

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text};
  opacity: 0.9;
  transition: all 0.2s ease;
  
  ${({ $isFavorite, theme }) => 
    $isFavorite && 
    css`
      color: ${theme.accent};
      background-color: ${theme.accent}20;
    `}
  
  ${({ $isDelete, theme }) => 
    $isDelete && 
    css`
      &:hover {
        background-color: ${theme.error};
        color: white;
      }
    `}
  
  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
`;