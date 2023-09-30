import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { StyledImageGallery } from './ImageGallery.styled';

export const ImageGallery = ({ images, handleOpenModalImage }) => {
  return (
    <StyledImageGallery>
      {images.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            handleOpenModalImage={() => handleOpenModalImage(largeImageURL)}
          />
        );
      })}
    </StyledImageGallery>
  );
};
