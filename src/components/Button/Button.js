import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ onClick }) => {
  return (
    <button className={styles.Button} type="button" onClick={onClick}>
      Load more
    </button>
    // window.scrollTo({
    //     top: document.documentElement.scrollHeight,
    //     behavior: 'smooth',
    //   });
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;