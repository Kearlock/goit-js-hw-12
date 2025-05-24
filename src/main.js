// Import 3-d party
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// Import own modules
import getImagesByQuery from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';

const form = document.querySelector('form');
const loadMoreButton = document.querySelector('.load-more');

let page = 1;
let query = '';

iziToast.settings({
  position: 'topCenter',
  transitionIn: 'flipInX',
  timeout: 1000,
});

form.addEventListener('submit', async e => {
  e.preventDefault();

  const searchInput = form.elements['search-text'];
  query = searchInput.value.trim();
  page = 1; // Reset page to 1 on new search

  if (!query) {
    iziToast.error({ message: 'Please enter a word to search.' });
    return;
  }

  clearGallery();
  hideLoadMoreButton();
  showLoader();
  try {
    const data = await getImagesByQuery(query, page);
    if (data.totalHits === 0) {
      return iziToast.show({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    }
    createGallery(data.hits);

    if (data.hits.length === 15 && page < Math.ceil(data.totalHits / 15)) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
      iziToast.info({
        message: `We're sorry, but you've reached the end of search results.`,
      });
    }
  } catch (error) {
    iziToast.error({
      message: 'Error fetching images.',
    });
  } finally {
    hideLoader();
  }
});

loadMoreButton.addEventListener('click', async () => {
  page += 1;
  showLoader();
  try {
    const data = await getImagesByQuery(query, page);
    createGallery(data.hits);

    const item = document.querySelector('.gallery-item');
    if (item) {
      const height = item.getBoundingClientRect().height;
      window.scrollBy({
        top: height * 2,
        behavior: 'smooth',
      });
    }

    if (data.hits.length === 15 && page < Math.ceil(data.totalHits / 15)) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
      iziToast.info({
        message: `All ${data.totalHits} images displayed.`,
      });
    }
  } catch (error) {
    iziToast.error({
      message: 'Error fetching images.',
    });
  } finally {
    hideLoader();
  }
});
