// Import 3-d party
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Import own modules
import getImagesByQuery from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const form = document.querySelector('form');

iziToast.settings({
  position: 'topCenter',
  transitionIn: 'flipInX',
  timeout: 1000,
});

form.addEventListener('submit', e => {
  e.preventDefault();

  const searchInput = form.elements['search-text'];
  const query = searchInput.value.trim();

  if (!query) {
    iziToast.error({ message: 'Please enter a word to search.' });
    return;
  }

  clearGallery();
  showLoader();
  getImagesByQuery(query)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      } else {
        createGallery(data.hits);
      }
    })
    .catch(() => {
      iziToast.error({
        message: 'Error fetching images.',
      });
      //   console.log('Error:', error);
    })
    .finally(() => {
      hideLoader();
      lightbox.refresh();
    });
});

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  overlayOpacity: 0.8,
});
