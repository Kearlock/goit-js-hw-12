import axios from 'axios';

const API_KEY = '50288981-a43d37d4d1623093b87615834';
const BASE_URL = 'https://pixabay.com/api/';

export default function getImages(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  return axios
    .get(BASE_URL, { params })
    .then(response => response.data)
    .catch(error => {
      console.error('API Error:', error);
      throw error;
    });
}
