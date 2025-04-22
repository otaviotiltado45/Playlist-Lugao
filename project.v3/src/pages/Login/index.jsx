import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Header from '../../components/Header';
import { 
  LoginContainer, 
  FormContainer, 
  Form, 
  Input, 
  Button, 
  ToggleFormButton,
  FormTitle,
  ErrorMessage,
  InputGroup,
  Label
} from './styles';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');
  
  // Login form state
  const [loginData, setLoginData] = useState({
    email: '',
    senha: ''
  });
  
  // Register form state
  const [registerData, setRegisterData] = useState({
    nome: '',
    email: '',
    senha: '',
    dataNascimento: ''
  });
  
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({ ...prev, [name]: value }));
    setError('');
  };
  
  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData(prev => ({ ...prev, [name]: value }));
    setError('');
  };
  
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!loginData.email || !loginData.senha) {
      setError('Por favor, preencha todos os campos.');
      return;
    }
    
    // Mock login - in a real app, this would call an API
    login({
      id: '1',
      nome: 'Usuário',
      email: loginData.email,
      avatar: null
    });
    
    navigate('/home');
  };
  
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!registerData.nome || !registerData.email || !registerData.senha || !registerData.dataNascimento) {
      setError('Por favor, preencha todos os campos.');
      return;
    }
    
    // Mock registration - in a real app, this would call an API
    login({
      id: '1',
      nome: registerData.nome,
      email: registerData.email,
      dataNascimento: registerData.dataNascimento,
      avatar: null
    });
    
    navigate('/home');
  };
  
  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError('');
  };
  
  return (
    <>
      <Header isLoginPage />
      <LoginContainer>
        <FormContainer>
          <FormTitle>{isLogin ? 'Login' : 'Cadastro'}</FormTitle>
          
          {error && <ErrorMessage>{error}</ErrorMessage>}
          
          {isLogin ? (
            <Form onSubmit={handleLoginSubmit}>
              <InputGroup>
                <Label htmlFor="email">E-mail</Label>
                <Input 
                  type="email" 
                  id="email"
                  name="email" 
                  placeholder="Seu e-mail" 
                  value={loginData.email}
                  onChange={handleLoginChange}
                />
              </InputGroup>
              
              <InputGroup>
                <Label htmlFor="senha">Senha</Label>
                <Input 
                  type="password" 
                  id="senha"
                  name="senha" 
                  placeholder="Sua senha" 
                  value={loginData.senha}
                  onChange={handleLoginChange}
                />
              </InputGroup>
              
              <Button type="submit">Entrar</Button>
            </Form>
          ) : (
            <Form onSubmit={handleRegisterSubmit}>
              <InputGroup>
                <Label htmlFor="nome">Nome</Label>
                <Input 
                  type="text" 
                  id="nome"
                  name="nome" 
                  placeholder="Seu nome" 
                  value={registerData.nome}
                  onChange={handleRegisterChange}
                />
              </InputGroup>
              
              <InputGroup>
                <Label htmlFor="email">E-mail</Label>
                <Input 
                  type="email" 
                  id="email"
                  name="email" 
                  placeholder="Seu e-mail" 
                  value={registerData.email}
                  onChange={handleRegisterChange}
                />
              </InputGroup>
              
              <InputGroup>
                <Label htmlFor="senha">Senha</Label>
                <Input 
                  type="password" 
                  id="senha"
                  name="senha" 
                  placeholder="Sua senha" 
                  value={registerData.senha}
                  onChange={handleRegisterChange}
                />
              </InputGroup>
              
              <InputGroup>
                <Label htmlFor="dataNascimento">Data de Nascimento</Label>
                <Input 
                  type="date" 
                  id="dataNascimento"
                  name="dataNascimento" 
                  value={registerData.dataNascimento}
                  onChange={handleRegisterChange}
                />
              </InputGroup>
              
              <Button type="submit">Cadastrar</Button>
            </Form>
          )}
          
          <ToggleFormButton type="button" onClick={toggleForm}>
            {isLogin ? 'Não tem uma conta? Cadastre-se' : 'Já tem uma conta? Faça login'}
          </ToggleFormButton>
        </FormContainer>
      </LoginContainer>
    </>
  );
};

export default Login;