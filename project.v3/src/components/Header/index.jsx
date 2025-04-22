import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useTheme } from '../../contexts/ThemeContext';
import Avatar from '../Avatar';
import SearchBar from '../SearchBar';
import { 
  HeaderContainer, 
  Logo, 
  LogoText, 
  Nav, 
  NavItem, 
  ButtonsContainer,
  ThemeToggle,
  MobileMenuButton,
  MobileMenu
} from './styles';
import { FiSun, FiMoon, FiMenu, FiX, FiLogOut, FiUser, FiHome, FiHeart } from 'react-icons/fi';

const Header = ({ isLoginPage = false }) => {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  if (isLoginPage) {
    return (
      <HeaderContainer>
        <Logo onClick={() => navigate('/home')}>
          <img src="/vinilbox02.png" alt="VinilBox Logo" />
          <LogoText>VinilBox</LogoText>
        </Logo>
      </HeaderContainer>
    );
  }

  return (
    <HeaderContainer>
      <Logo onClick={() => navigate('/home')}>
        <LogoText>VinilBox</LogoText>
      </Logo>
      
      <SearchBar />
      
      <ButtonsContainer>
        <ThemeToggle onClick={toggleTheme}>
          {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
        </ThemeToggle>
        
        <Link to="/perfil">
          <Avatar src={user?.avatar} size="small" />
        </Link>
        
        <MobileMenuButton onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </MobileMenuButton>
      </ButtonsContainer>
      
      {mobileMenuOpen && (
        <MobileMenu>
          <Nav>
            <NavItem onClick={() => setMobileMenuOpen(false)}>
              <Link to="/home"><FiHome /> Início</Link>
            </NavItem>
            <NavItem onClick={() => setMobileMenuOpen(false)}>
              <Link to="/favoritos"><FiHeart /> Favoritos</Link>
            </NavItem>
            <NavItem onClick={() => setMobileMenuOpen(false)}>
              <Link to="/perfil"><FiUser /> Perfil</Link>
            </NavItem>
            <NavItem onClick={handleLogout}>
              <FiLogOut /> Sair
            </NavItem>
          </Nav>
        </MobileMenu>
      )}
    </HeaderContainer>
  );
};

export default Header;