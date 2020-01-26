import React, { Component } from 'react';
import * as API from '../services/api';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';
import './App.css';

class App extends Component {
  state = {
    items: [],
    isLoading: false,
    searchQuery: '',
    pageNumber: 1,
    isModalOpen: false,
  };

  componentDidMount() {
    const { searchQuery, pageNumber } = this.state;
    this.onSearch(searchQuery, pageNumber);
  }

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, pageNumber } = this.state;
    if (
      prevState.searchQuery !== searchQuery ||
      prevState.pageNumber !== pageNumber
    ) {
      this.onSearch(searchQuery, pageNumber);
    }
  }

  onSearch = (query, pageNumber) => {
    this.setState({ isLoading: true });
    API.getItems(query, pageNumber)
      .then(res =>
        this.setState(prevState => ({
          items: [...prevState.items, ...res.data.hits],
        })),
      )
      .catch(err => {
        throw new Error(err);
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  onSubmitSearchBar = text => {
    this.setState({ searchQuery: text, items: [], pageNumber: 1 });
  };

  onClickMore = () => {
    this.setState(prevState => ({
      pageNumber: prevState.pageNumber + 1,
    }));
  };

  // handleOpenModal = e => {
  //   e.preventDefault();
  //   if (e.target !== e.target.current) {
  //     console.log(
  //       (('e.target': e.target), ('e.current.target': e.current.target)),
  //     );
  //   }
  // };

  openModal = () => this.setState({ isModalOpen: true });

  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { items, isLoading, isModalOpen } = this.state;
    return (
      <>
        {isLoading && <Loader />}
        <SearchBar onSubmit={this.onSubmitSearchBar} />
        <ImageGallery items={items} />
        {isModalOpen && (
          <Modal onClose={this.closeModal} onOpen={this.openModal} />
        )}
        <Button onClick={this.onClickMore} />
      </>
    );
  }
}

export default App;
