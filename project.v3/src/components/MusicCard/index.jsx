import { useState } from 'react';
import { useMusic } from '../../contexts/MusicContext';
import { useAuth } from '../../contexts/AuthContext';
import defaultAlbum from '../../assets/default-album.jpg';
import { 
  CardContainer, 
  AlbumCover, 
  MusicInfo, 
  Title, 
  Artist, 
  ButtonsContainer, 
  ActionButton,
  GenreTag,
  Year
} from './styles';
import { FiHeart, FiTrash, FiMusic } from 'react-icons/fi';

const MusicCard = ({ music }) => {
  const { deleteMusic, toggleFavorite, favorites } = useMusic();
  const { user } = useAuth();
  const [isHovered, setIsHovered] = useState(false);
  
  const isFavorite = favorites.includes(music.id);
  
  const handleDelete = (e) => {
    e.stopPropagation();
    deleteMusic(music.id);
  };
  
  const handleFavorite = (e) => {
    e.stopPropagation();
    toggleFavorite(music.id);
  };
  
  return (
    <CardContainer 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AlbumCover src={music.imagem || defaultAlbum} alt={music.nome} />
      
      <MusicInfo>
        <Title>{music.nome}</Title>
        <Artist>{music.artista}</Artist>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginTop: '8px' }}>
          <GenreTag>{music.genero}</GenreTag>
          <Year>{music.ano}</Year>
        </div>
      </MusicInfo>
      
      {(isHovered || isFavorite) && (
        <ButtonsContainer>
          <ActionButton 
            onClick={handleFavorite} 
            $isFavorite={isFavorite}
          >
            <FiHeart size={18} />
          </ActionButton>
          
          {user && (
            <ActionButton 
              onClick={handleDelete}
              $isDelete
            >
              <FiTrash size={18} />
            </ActionButton>
          )}
        </ButtonsContainer>
      )}
    </CardContainer>
  );
};

export default MusicCard;