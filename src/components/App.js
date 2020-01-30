import React, { Component } from 'react';
import * as API from '../services/api';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import ErrorNotification from './ErrorNotification/ErrorNotification';
import Loader from './Loader/Loader';
import styles from './App.module.css';

class App extends Component {
  state = {
    items: [],
    isLoading: false,
    searchQuery: '',
    text: '',
    pageNumber: 0,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, pageNumber } = this.state;
    if (
      prevState.searchQuery !== searchQuery ||
      prevState.pageNumber !== pageNumber
    ) {
      this.onSearch(searchQuery, pageNumber);
    }
  }

  onSearch = (searchQuery, pageNumber) => {
    this.setState({ isLoading: true });
    API.getItems(searchQuery, pageNumber)
      .then(({ data }) =>
        this.setState(prevState => ({
          items: [...prevState.items, ...data.hits],
        })),
      )
      .catch(error => this.setState({ error }))
      .finally(
        () =>
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          }),
        this.setState({ isLoading: false }),
      );
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  onSubmitSearchBar = e => {
    e.preventDefault();
    const { text } = this.state;
    this.setState({ pageNumber: 1, items: [], searchQuery: text });
    this.setState({ text: '' });
  };

  onClickMore = () => {
    const { pageNumber } = this.state;
    this.setState({ pageNumber: pageNumber + 1 });
  };

  render() {
    const { items, isLoading, error, text } = this.state;
    return (
      <div className={styles.App}>
        <SearchBar
          handleSubmit={this.onSubmitSearchBar}
          handleChange={this.handleChange}
          searchQuery={text}
        />
        <ImageGallery items={items} />
        {error && <ErrorNotification text={error.message} />}
        {isLoading ? (
          <Loader />
        ) : (
          items.length > 0 && <Button onClick={this.onClickMore} />
        )}
      </div>
    );
  }
}

export default App;
