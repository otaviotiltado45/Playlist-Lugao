import styled from 'styled-components';

const sizes = {
  small: '40px',
  medium: '80px',
  large: '120px'
};

export const AvatarContainer = styled.div`
  width: ${({ size }) => sizes[size] || sizes.medium};
  height: ${({ size }) => sizes[size] || sizes.medium};
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid ${({ theme }) => theme.primary};
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 0 0 4px ${({ theme }) => theme.secondary}40;
  }
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;