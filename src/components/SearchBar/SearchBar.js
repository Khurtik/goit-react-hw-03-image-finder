import React from 'react';
import PropTypes from 'prop-types';
import styles from './Searchbar.module.css';

const SearchBar = ({ handleChange, handleSubmit, searchQuery }) => (
  <header className={styles.Searchbar}>
    <form className={styles.SearchForm} onSubmit={handleSubmit}>
      <button type="submit" className={styles.SearchFormButton}>
        <span className={styles.SearchFormButtonLabel}>Search</span>
      </button>

      <input
        className={styles.SearchFormInput}
        type="text"
        autoComplete="off"
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus
        placeholder="Search images and photos"
        onChange={handleChange}
        value={searchQuery}
      />
    </form>
  </header>
);
SearchBar.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
};

export default SearchBar;
