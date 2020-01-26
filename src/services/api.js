import axios from 'axios';

export const getItems = (searchQuery = '', page = 1) => {
  return axios.get(
    `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=14297998-d1283a06c8d7c6782bc49ad77&image_type=photo&orientation=horizontal&per_page=12`,
  );
};

export const w = () => null;
