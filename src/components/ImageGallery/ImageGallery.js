import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ items }) => {
  return (
    <ul className={styles.ImageGallery}>
      {items.map(item => (
        <ImageGalleryItem webImgURL={item.webformatURL} key={item.id} />
      ))}
    </ul>
  );
};

ImageGallery.defaultProps = {
  items: [],
};

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})),
};

export default ImageGallery;
