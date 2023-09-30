import { ReactComponent as IconSearch } from '../../assets/images/search-outline.svg';
import { StyledSearchbar, StyledSearchForm, StyledSearchFormButton, StyledSearchFormInput } from './SearchBar.styled';

export const Searchbar = ({ onSubmit }) => {
  return (
    <StyledSearchbar>
      <StyledSearchForm onSubmit={onSubmit}>
        <StyledSearchFormButton type="submit">
          <IconSearch width="20" />
        </StyledSearchFormButton>

        <StyledSearchFormInput
          name="searchQuery"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </StyledSearchForm>
    </StyledSearchbar>
  );
};
