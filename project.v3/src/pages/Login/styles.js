import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 80px);
  padding: 24px;
`;

export const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: ${({ theme }) => theme.card};
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadow};
  padding: 32px;
  animation: ${fadeIn} 0.3s ease;
`;

export const FormTitle = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.primary};
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
`;

export const Input = styled.input`
  padding: 12px 16px;
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
  margin-top: 8px;
  padding: 14px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  font-weight: 600;
  border: none;
  font-size: 1rem;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.secondary};
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

export const ToggleFormButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.primary};
  margin-top: 24px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${({ theme }) => theme.secondary};
    text-decoration: underline;
  }
`;

export const ErrorMessage = styled.div`
  background-color: ${({ theme }) => `${theme.error}20`};
  color: ${({ theme }) => theme.error};
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 16px;
  font-size: 0.875rem;
`;