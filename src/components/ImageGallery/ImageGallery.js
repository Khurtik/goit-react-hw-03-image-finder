import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ items }) => {
  return (
    <ul className={styles.ImageGallery}>
      {items.map(item => (
        <ImageGalleryItem
          key={item.id}
          webImgURL={item.webformatURL}
          largeImgURL={item.largeImageURL}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ImageGallery;
