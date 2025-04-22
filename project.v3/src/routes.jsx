import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import Login from './pages/Login';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';

const PrivateRoute = ({ element }) => {
  const { user } = useAuth();
  
  return user ? element : <Navigate to="/" replace />;
};

const PublicRoute = ({ element }) => {
  const { user } = useAuth();
  
  return !user ? element : <Navigate to="/home" replace />;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicRoute element={<Login />} />} />
      <Route path="/home" element={<PrivateRoute element={<Home />} />} />
      <Route path="/favoritos" element={<PrivateRoute element={<Favorites />} />} />
      <Route path="/perfil" element={<PrivateRoute element={<Profile />} />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;