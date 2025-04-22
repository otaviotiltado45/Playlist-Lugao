import { createContext, useState, useContext, useEffect } from 'react';

const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  const [musics, setMusics] = useState(() => {
    const savedMusics = localStorage.getItem('@VinilBox:musics');
    return savedMusics ? JSON.parse(savedMusics) : [];
  });

  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('@VinilBox:favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem('@VinilBox:musics', JSON.stringify(musics));
  }, [musics]);

  useEffect(() => {
    localStorage.setItem('@VinilBox:favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addMusic = (music) => {
    setMusics(prevMusics => [...prevMusics, { ...music, id: Date.now().toString() }]);
  };

  const deleteMusic = (id) => {
    setMusics(prevMusics => prevMusics.filter(music => music.id !== id));
    setFavorites(prevFavorites => prevFavorites.filter(favId => favId !== id));
  };

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(prevFavorites => prevFavorites.filter(favId => favId !== id));
    } else {
      setFavorites(prevFavorites => [...prevFavorites, id]);
    }
  };

  const getFavoriteMusics = () => {
    return musics.filter(music => favorites.includes(music.id));
  };

  return (
    <MusicContext.Provider value={{ 
      musics, 
      favorites, 
      addMusic, 
      deleteMusic, 
      toggleFavorite, 
      getFavoriteMusics 
    }}>
      {children}
    </MusicContext.Provider>
  );
};

export const useMusic = () => useContext(MusicContext);