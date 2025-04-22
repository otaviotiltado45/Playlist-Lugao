import { useRef } from 'react';
import MusicCard from '../MusicCard';
import { 
  CarouselContainer, 
  CarouselContent, 
  CarouselTitle,
  TitleSection,
  ScrollButton,
  EmptyState,
  AddMusicButton
} from './styles';
import { FiChevronLeft, FiChevronRight, FiPlusCircle, FiMusic } from 'react-icons/fi';

const Carousel = ({ title, musics, emptyMessage, onAddMusic }) => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -250, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 250, behavior: 'smooth' });
    }
  };

  return (
    <CarouselContainer>
      <TitleSection>
        <CarouselTitle>{title}</CarouselTitle>
        {onAddMusic && (
          <AddMusicButton onClick={onAddMusic}>
            <FiPlusCircle size={20} />
            Adicionar
          </AddMusicButton>
        )}
      </TitleSection>

      {musics.length > 0 ? (
        <>
          <ScrollButton direction="left" onClick={scrollLeft}>
            <FiChevronLeft size={24} />
          </ScrollButton>
          
          <CarouselContent ref={carouselRef}>
            {musics.map(music => (
              <MusicCard key={music.id} music={music} />
            ))}
          </CarouselContent>
          
          <ScrollButton direction="right" onClick={scrollRight}>
            <FiChevronRight size={24} />
          </ScrollButton>
        </>
      ) : (
        <EmptyState>
          <FiMusic size={48} />
          <p>{emptyMessage || 'Nenhuma música encontrada'}</p>
        </EmptyState>
      )}
    </CarouselContainer>
  );
};

export default Carousel;