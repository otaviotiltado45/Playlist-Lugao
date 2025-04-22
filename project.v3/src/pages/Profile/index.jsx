import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import Header from '../../components/Header';
import Avatar from '../../components/Avatar';
import { 
  ProfileContainer, 
  ProfileCard,
  ProfileHeader,
  UserInfo,
  UserName,
  UserEmail,
  BioSection,
  BioText,
  EditButton,
  ModalOverlay,
  ModalContent,
  ModalTitle,
  ModalHeader,
  ModalCloseButton,
  FormGroup,
  Label,
  Input,
  Button,
  UserStat,
  StatsSection,
  FileUploadContainer,
  FileUploadLabel,
  CharCounter,
  DeleteImageButton
} from './styles';
import { FiEdit, FiX, FiUpload, FiUser, FiCalendar, FiMail, FiTrash2 } from 'react-icons/fi';
import { useMusic } from '../../contexts/MusicContext';

const Profile = () => {
  const { user, updateProfile } = useAuth();
  const { musics, favorites } = useMusic();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    nome: user?.nome || '',
    dataNascimento: user?.dataNascimento || '',
    bio: user?.bio || '',
    avatar: user?.avatar || null
  });
  const [imagePreview, setImagePreview] = useState(user?.avatar || null);
  
  const handleOpenEditModal = () => {
    setIsEditing(true);
  };
  
  const handleCloseEditModal = () => {
    setIsEditing(false);
    setProfileData({
      nome: user?.nome || '',
      dataNascimento: user?.dataNascimento || '',
      bio: user?.bio || '',
      avatar: user?.avatar || null
    });
    setImagePreview(user?.avatar || null);
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'bio' && value.length > 40) {
      return;
    }
    
    setProfileData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileData(prev => ({ ...prev, avatar: imageUrl }));
      setImagePreview(imageUrl);
    }
  };

  const handleDeleteImage = () => {
    setProfileData(prev => ({ ...prev, avatar: null }));
    setImagePreview(null);
  };
  
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    updateProfile(profileData);
    setIsEditing(false);
  };
  
  const formatDate = (dateString) => {
    if (!dateString) return '';
    
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
  };
  
  return (
    <>
      <Header />
      <ProfileContainer>
        <ProfileCard>
          <ProfileHeader>
            <Avatar src={user?.avatar} size="large" />
            <UserInfo>
              <UserName>{user?.nome || 'Usuário'}</UserName>
              <UserEmail><FiMail /> {user?.email}</UserEmail>
              {user?.dataNascimento && (
                <UserEmail><FiCalendar /> {formatDate(user.dataNascimento)}</UserEmail>
              )}
            </UserInfo>
            <EditButton onClick={handleOpenEditModal}>
              <FiEdit size={18} />
              Editar Perfil
            </EditButton>
          </ProfileHeader>
          
          <BioSection>
            <h3>Bio</h3>
            <BioText>{user?.bio || 'Nenhuma bio adicionada. Clique em "Editar Perfil" para adicionar.'}</BioText>
          </BioSection>
          
          <StatsSection>
            <UserStat>
              <h3>{musics.length}</h3>
              <p>Músicas</p>
            </UserStat>
            <UserStat>
              <h3>{favorites.length}</h3>
              <p>Favoritas</p>
            </UserStat>
          </StatsSection>
        </ProfileCard>
      </ProfileContainer>
      
      {isEditing && (
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>Editar Perfil</ModalTitle>
              <ModalCloseButton onClick={handleCloseEditModal}>
                <FiX size={24} />
              </ModalCloseButton>
            </ModalHeader>
            
            <form onSubmit={handleUpdateProfile}>
              <FormGroup>
                <Label>Foto de Perfil</Label>
                <FileUploadContainer>
                  {imagePreview ? (
                    <>
                      <img 
                        src={imagePreview} 
                        alt="Avatar" 
                        style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover' }} 
                      />
                      <DeleteImageButton type="button" onClick={handleDeleteImage}>
                        <FiTrash2 size={20} />
                        Remover foto
                      </DeleteImageButton>
                    </>
                  ) : (
                    <FileUploadLabel htmlFor="avatar">
                      <FiUpload size={24} />
                      <span>Selecionar Imagem</span>
                    </FileUploadLabel>
                  )}
                  <input 
                    type="file"
                    id="avatar"
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{ display: 'none' }}
                  />
                </FileUploadContainer>
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="nome">
                  <FiUser size={16} style={{ marginRight: '8px' }} />
                  Nome
                </Label>
                <Input 
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder="Seu nome"
                  value={profileData.nome}
                  onChange={handleInputChange}
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="dataNascimento">
                  <FiCalendar size={16} style={{ marginRight: '8px' }} />
                  Data de Nascimento
                </Label>
                <Input 
                  type="date"
                  id="dataNascimento"
                  name="dataNascimento"
                  value={profileData.dataNascimento}
                  onChange={handleInputChange}
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="bio">
                  Bio
                  <CharCounter>{profileData.bio.length}/40</CharCounter>
                </Label>
                <Input 
                  as="textarea"
                  id="bio"
                  name="bio"
                  placeholder="Fale um pouco sobre você (máx. 40 caracteres)"
                  value={profileData.bio}
                  onChange={handleInputChange}
                  maxLength={40}
                  rows={3}
                />
              </FormGroup>
              
              <Button type="submit">Salvar Alterações</Button>
            </form>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default Profile;