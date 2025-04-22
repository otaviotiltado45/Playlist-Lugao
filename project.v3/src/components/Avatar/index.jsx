import { AvatarContainer, AvatarImage } from './styles';
import defaultAvatar from '../../assets/default-avatar.png';

const Avatar = ({ src, size = 'medium', alt = 'Avatar do usuário' }) => {
  return (
    <AvatarContainer size={size}>
      <AvatarImage src={src || defaultAvatar} alt={alt} />
    </AvatarContainer>
  );
};

export default Avatar;