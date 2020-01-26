import React from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

const Modal = ({ webLargeImgURL }) => {
  return (
    <div className={styles.Overlay} role="presentation">
      <div className={styles.Modal}>
        <img src={webLargeImgURL} alt="webLargeImgURL" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  webLargeImgURL: PropTypes.string.isRequired,
};

export default Modal;
