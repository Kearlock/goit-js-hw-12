import axios from 'axios';

const API_KEY = '50288981-a43d37d4d1623093b87615834';
const BASE_URL = 'https://pixabay.com/api/';

export default async function getImages(query, page) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page: page || 1, // Default to page 1 if not provided
  };
  try {
    const response = await axios.get(BASE_URL, { params });
    console.log('API Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
  // return axios
  //   .get(BASE_URL, { params })
  //   .then(response => response.data)
  //   .catch(error => {
  //     console.error('API Error:', error);
  //     throw error;
  //   });
}
