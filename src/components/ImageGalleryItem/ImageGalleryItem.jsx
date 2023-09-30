import { StyledImageGalleryItem, StyledImageGalleryItemImage } from "./ImageGalleryItem.styled";

export const ImageGalleryItem = ({
  id,
  webformatURL,
  largeImageURL,
  handleOpenModalImage,
}) => {
  return (
    <StyledImageGalleryItem>
      <StyledImageGalleryItemImage
        src={webformatURL}
        alt={id}
        onClick={handleOpenModalImage}
      />
    </StyledImageGalleryItem>
  );
};
