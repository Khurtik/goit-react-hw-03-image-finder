import React, { Component } from 'react';
import * as API from '../services/api';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import styles from './App.module.css';

class App extends Component {
  state = {
    items: [],
    isLoading: false,
    searchQuery: '',
    pageNumber: 1,
  };

  // componentDidMount() {
  //   const { searchQuery, pageNumber } = this.state;
  //   this.onSearch(searchQuery, pageNumber);
  // }

  componentDidUpdate(prevProps, prevState) {
    const { pageNumber } = this.state;
    if (prevState.pageNumber !== pageNumber) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  onSearch = (searchQuery, pageNumber) => {
    this.setState({ isLoading: true });
    API.getItems(searchQuery, pageNumber)
      .then(({ data }) =>
        this.setState(prevState => ({
          pageNumber: prevState.pageNumber + 1,
          items: [...prevState.items, ...data.hits],
        })),
      )
      .catch(err => {
        throw new Error(err);
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  handleChange = e => {
    this.setState({ searchQuery: e.target.value });
  };

  onSubmitSearchBar = e => {
    e.preventDefault();
    this.onSearch(this.state.searchQuery);

    this.setState({ pageNumber: 1, items: [] });
  };

  onClickMore = () => {
    const { searchQuery, pageNumber } = this.state;
    this.onSearch(searchQuery, pageNumber);
  };

  render() {
    const { items, isLoading, searchQuery } = this.state;
    return (
      <div className={styles.App}>
        <SearchBar
          handleSubmit={this.onSubmitSearchBar}
          handleChange={this.handleChange}
          searchQuery={searchQuery}
        />
        <ImageGallery items={items} />
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
