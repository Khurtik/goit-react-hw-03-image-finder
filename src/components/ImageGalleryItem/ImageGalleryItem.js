import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webImgURL }) => {
  return (
    <li className={styles.ImageGalleryItem}>
      <img
        src={webImgURL}
        alt="webformatURL"
        className={styles.ImageGalleryItemImage}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webImgURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
