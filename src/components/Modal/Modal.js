import React from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

const Modal = ({ largeImgURL, onClose }) => {
  window.addEventListener('keydown', onClose);
  return (
    <div className={styles.Overlay} onClick={onClose} role="presentation">
      <div className={styles.Modal}>
        <img src={largeImgURL} alt="bigimage" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  largeImgURL: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
