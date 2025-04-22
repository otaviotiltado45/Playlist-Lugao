import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const ProfileContainer = styled.div`
  padding: 24px;
  max-width: 800px;
  margin: 0 auto;
`;

export const ProfileCard = styled.div`
  background-color: ${({ theme }) => theme.card};
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadow};
  padding: 32px;
  animation: ${slideUp} 0.3s ease;
`;

export const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 32px;
  
  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
    gap: 16px;
  }
`;

export const UserInfo = styled.div`
  margin-left: 24px;
  flex: 1;
  
  @media (max-width: 600px) {
    margin-left: 0;
  }
`;

export const UserName = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 8px;
`;

export const UserEmail = styled.p`
  color: ${({ theme }) => `${theme.text}80`};
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 4px;
`;

export const BioSection = styled.div`
  margin-bottom: 32px;
  padding: 16px;
  background-color: ${({ theme }) => `${theme.background}`};
  border-radius: 8px;
  
  h3 {
    font-size: 1rem;
    margin-bottom: 8px;
    color: ${({ theme }) => theme.primary};
  }
`;

export const BioText = styled.p`
  font-size: 0.875rem;
  line-height: 1.6;
`;

export const StatsSection = styled.div`
  display: flex;
  gap: 16px;
  
  @media (max-width: 600px) {
    justify-content: center;
  }
`;

export const UserStat = styled.div`
  background-color: ${({ theme }) => `${theme.background}`};
  padding: 16px 24px;
  border-radius: 8px;
  text-align: center;
  min-width: 100px;
  
  h3 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.primary};
    margin-bottom: 4px;
  }
  
  p {
    font-size: 0.75rem;
    color: ${({ theme }) => `${theme.text}80`};
  }
`;

export const EditButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.secondary};
    transform: translateY(-2px);
  }
  
  @media (max-width: 600px) {
    align-self: center;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 16px;
  animation: ${fadeIn} 0.2s ease;
`;

export const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.card};
  border-radius: 12px;
  width: 100%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  animation: ${slideUp} 0.3s ease;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

export const ModalTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
`;

export const ModalCloseButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 16px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 6px;
  position: relative;
`;

export const CharCounter = styled.span`
  position: absolute;
  right: 0;
  font-size: 0.75rem;
  color: ${({ theme }) => `${theme.text}60`};
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  transition: all 0.2s ease;
  
  &:focus {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => `${theme.primary}30`};
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 14px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  font-weight: 600;
  border: none;
  font-size: 1rem;
  transition: all 0.2s ease;
  margin-top: 8px;
  
  &:hover {
    background-color: ${({ theme }) => theme.secondary};
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

export const FileUploadContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border: 2px dashed ${({ theme }) => theme.border};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => `${theme.primary}05`};
  }
`;

export const FileUploadLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 24px;
  cursor: pointer;
  color: ${({ theme }) => `${theme.text}80`};
  
  svg {
    margin-bottom: 8px;
  }
`;

export const DeleteImageButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  margin-top: 12px;
  background-color: ${({ theme }) => `${theme.error}20`};
  color: ${({ theme }) => theme.error};
  border: none;
  border-radius: 20px;
  font-size: 0.875rem;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.error};
    color: white;
  }
`;