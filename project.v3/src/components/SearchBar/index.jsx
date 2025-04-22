import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchContainer, SearchInput, SearchButton } from './styles';
import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  
  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/home?search=${encodeURIComponent(query)}`);
    }
  };
  
  return (
    <SearchContainer onSubmit={handleSearch}>
      <SearchInput 
        type="text" 
        placeholder="Pesquisar músicas, artistas..." 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <SearchButton type="submit">
        <FiSearch size={18} />
      </SearchButton>
    </SearchContainer>
  );
};

export default SearchBar;