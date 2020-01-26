import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import styles from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  state = {
    isOpenModal: false,
  };

  static propTypes = {
    largeImgURL: PropTypes.string.isRequired,
    webImgURL: PropTypes.string.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleCloseModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleCloseModal);
  }

  handleOpenModal = () => {
    this.setState({ isOpenModal: true });
  };

  handleCloseModal = e => {
    if (e.code !== 'Escape' && e.target !== e.currentTarget) {
      return;
    }
    this.setState({ isOpenModal: false });
  };

  render() {
    const { largeImgURL, webImgURL } = this.props;
    const { isOpenModal } = this.state;
    return (
      <>
        {isOpenModal && (
          <Modal largeImgURL={largeImgURL} onClose={this.handleCloseModal} />
        )}
        <li className={styles.ImageGalleryItem}>
          <img
            onClick={this.handleOpenModal}
            src={webImgURL}
            alt="webformatURL"
            className={styles.ImageGalleryItemImage}
            role="presentation"
          />
        </li>
      </>
    );
  }
}

export default ImageGalleryItem;
