import { useMusic } from '../../contexts/MusicContext';
import Header from '../../components/Header';
import Carousel from '../../components/Carousel';
import { FavoritesContainer, EmptyState } from './styles';
import { FiHeart } from 'react-icons/fi';

const Favorites = () => {
  const { getFavoriteMusics } = useMusic();
  const favoriteMusics = getFavoriteMusics();
  
  return (
    <>
      <Header />
      <FavoritesContainer>
        <Carousel 
          title="Suas Músicas Favoritas" 
          musics={favoriteMusics}
          emptyMessage="Você ainda não tem músicas favoritas. Favorite algumas músicas na sua coleção!"
        />
        
        {favoriteMusics.length === 0 && (
          <EmptyState>
            <FiHeart size={48} />
            <h3>Sem favoritos ainda</h3>
            <p>Adicione músicas aos seus favoritos para vê-las aqui.</p>
          </EmptyState>
        )}
      </FavoritesContainer>
    </>
  );
};

export default Favorites;