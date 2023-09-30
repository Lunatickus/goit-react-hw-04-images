import { useState, useEffect } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImages } from 'services/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';
import { StyledAppContainer } from './App.styled';

export const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [totalImages, setTotalImages] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuery = async () => {
      if (query === '') {
        return;
      }

      setIsLoading(true);
      try {
        const { hits, total } = await fetchImages(query, page);
        setImages(prevImages => [...prevImages, ...hits]);
        setTotalImages(total);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuery();
  }, [query, page]);

  const onSubmit = e => {
    e.preventDefault();

    const searchedQuery = e.currentTarget.elements.searchQuery.value;

    setQuery(searchedQuery);
    setImages([]);
    setPage(1);

    e.currentTarget.reset();
  };

  const incrementPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleOpenModalImage = url => {
    setLargeImageURL(url);
  };

  const handleCloseModalImage = () => {
    setLargeImageURL('');
  };

  const showImages = images.length > 0;

  return (
    <StyledAppContainer>
      <Searchbar onSubmit={onSubmit} />
      {showImages && (
        <ImageGallery
          images={images}
          handleOpenModalImage={handleOpenModalImage}
        />
      )}
      {isLoading && <Loader />}
      {showImages && images.length < totalImages && (
        <Button incrementPage={incrementPage} />
      )}
      {largeImageURL !== '' && (
        <Modal onClose={handleCloseModalImage} largeImageURL={largeImageURL} />
      )}
    </StyledAppContainer>
  );
};
