import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useMusic } from '../../contexts/MusicContext';
import Header from '../../components/Header';
import Carousel from '../../components/Carousel';
import defaultAlbum from '../../assets/default-album.jpg';
import { 
  HomeContainer,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalCloseButton,
  FormGroup,
  Label,
  Input,
  Button,
  Select,
  FileUploadContainer,
  FileUploadLabel,
  DeleteImageButton
} from './styles';
import { FiX, FiUpload, FiTrash2 } from 'react-icons/fi';

const Home = () => {
  const { musics, addMusic, favorites } = useMusic();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('search');
  
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newMusic, setNewMusic] = useState({
    nome: '',
    artista: '',
    ano: '',
    genero: '',
    imagem: null
  });
  
  const [filteredMusics, setFilteredMusics] = useState(musics);
  const [imagePreview, setImagePreview] = useState(null);
  
  useEffect(() => {
    if (searchQuery) {
      const filtered = musics.filter(music => 
        music.nome.toLowerCase().includes(searchQuery.toLowerCase()) ||
        music.artista.toLowerCase().includes(searchQuery.toLowerCase()) ||
        music.genero.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredMusics(filtered);
    } else {
      setFilteredMusics(musics);
    }
  }, [searchQuery, musics]);
  
  const handleOpenAddModal = () => {
    setIsAddModalOpen(true);
  };
  
  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
    setNewMusic({
      nome: '',
      artista: '',
      ano: '',
      genero: '',
      imagem: null
    });
    setImagePreview(null);
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMusic(prev => ({ ...prev, [name]: value }));
  };
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewMusic(prev => ({ ...prev, imagem: URL.createObjectURL(file) }));
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleDeleteImage = () => {
    setNewMusic(prev => ({ ...prev, imagem: null }));
    setImagePreview(null);
  };
  
  const handleAddMusic = (e) => {
    e.preventDefault();
    if (newMusic.nome && newMusic.artista) {
      addMusic({
        nome: newMusic.nome,
        artista: newMusic.artista,
        ano: newMusic.ano || 'Desconhecido',
        genero: newMusic.genero || 'Outro',
        imagem: newMusic.imagem || defaultAlbum
      });
      handleCloseAddModal();
    }
  };
  
  return (
    <>
      <Header />
      <HomeContainer>
        {searchQuery ? (
          <Carousel 
            title={`Resultados para "${searchQuery}"`}
            musics={filteredMusics} 
            emptyMessage="Nenhuma música encontrada para esta busca"
          />
        ) : (
          <>
            <Carousel 
              title="Sua Coleção de Músicas" 
              musics={musics}
              onAddMusic={handleOpenAddModal}
              emptyMessage="Você ainda não tem músicas. Adicione sua primeira música!"
            />
            {favorites.length > 0 && (
              <Carousel 
                title="Seus Favoritos" 
                musics={musics.filter(music => favorites.includes(music.id))}
              />
            )}
          </>
        )}
      </HomeContainer>
      
      {isAddModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>Adicionar Nova Música</ModalTitle>
              <ModalCloseButton onClick={handleCloseAddModal}>
                <FiX size={24} />
              </ModalCloseButton>
            </ModalHeader>
            
            <form onSubmit={handleAddMusic}>
              <FormGroup>
                <Label htmlFor="nome">Nome da Música</Label>
                <Input 
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder="Digite o nome da música"
                  value={newMusic.nome}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="artista">Artista/Banda</Label>
                <Input 
                  type="text"
                  id="artista"
                  name="artista"
                  placeholder="Digite o nome do artista ou banda"
                  value={newMusic.artista}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="ano">Ano de Lançamento</Label>
                <Input 
                  type="number"
                  id="ano"
                  name="ano"
                  placeholder="Ano de lançamento"
                  value={newMusic.ano}
                  onChange={handleInputChange}
                  min="1900"
                  max="2099"
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="genero">Gênero</Label>
                <Select 
                  id="genero"
                  name="genero"
                  value={newMusic.genero}
                  onChange={handleInputChange}
                >
                  <option value="">Selecione um gênero</option>
                  <option value="Rock">Rock</option>
                  <option value="Pop">Pop</option>
                  <option value="Jazz">Jazz</option>
                  <option value="Eletrônica">Eletrônica</option>
                  <option value="Clássica">Clássica</option>
                  <option value="Hip Hop">Hip Hop</option>
                  <option value="R&B">R&B</option>
                  <option value="Samba">Samba</option>
                  <option value="MPB">MPB</option>
                  <option value="Outro">Outro</option>
                </Select>
              </FormGroup>
              
              <FormGroup>
                <Label>Capa do Álbum</Label>
                <FileUploadContainer>
                  {imagePreview ? (
                    <>
                      <img 
                        src={imagePreview} 
                        alt="Preview" 
                        style={{ width: '100%', maxHeight: '200px', objectFit: 'cover', borderRadius: '8px' }} 
                      />
                      <DeleteImageButton type="button" onClick={handleDeleteImage}>
                        <FiTrash2 size={20} />
                        Remover imagem
                      </DeleteImageButton>
                    </>
                  ) : (
                    <FileUploadLabel htmlFor="imagem">
                      <FiUpload size={24} />
                      <span>Selecionar Imagem</span>
                    </FileUploadLabel>
                  )}
                  <input 
                    type="file"
                    id="imagem"
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{ display: 'none' }}
                  />
                </FileUploadContainer>
              </FormGroup>
              
              <Button type="submit">Adicionar Música</Button>
            </form>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default Home;