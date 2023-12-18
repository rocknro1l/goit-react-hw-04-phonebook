import { SearchWrapper } from './SearchContact.styled';
import { Input } from 'components/ContactInput/ContactInput.styled';

export const SearchContact = props => {
  const { value, onSearch } = props;
  return (
    <SearchWrapper>
      <label htmlFor="search">Find contact:</label>
      <Input value={value} onChange={onSearch} type="text" id="search" />
    </SearchWrapper>
  );
};
