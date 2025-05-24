import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  overlayOpacity: 0.8,
});

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <li class="gallery-item">
        <div class="gallery-picture">
        <a class="gallery-link" href="${largeImageURL}">
          <img
            class="gallery-image"
            src="${webformatURL}"
            alt="${tags}"
          />
        </a>
        </div>
        <ul class="info">
          <li class="info-item">
            <p class="info-text">Likes: ${likes}</p>
          </li>
          <li class="info-item">
            <p class="info-text">Views: ${views}</p>
          </li>
          <li class="info-item">
            <p class="info-text">Comments: ${comments}</p>
          </li>
          <li class="info-item">
            <p class="info-text">Downloads: ${downloads}</p>
          </li>
          </ul>
      </li>
    `
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

const loader = document.querySelector('.loader');

export function showLoader() {
  loader.classList.remove('hidden');
}

export function hideLoader() {
  loader.classList.add('hidden');
}

const loadMoreButton = document.querySelector('.load-more');

export function hideLoadMoreButton() {
  loadMoreButton.classList.add('hidden');
}

export function showLoadMoreButton() {
  loadMoreButton.classList.remove('hidden');
}
