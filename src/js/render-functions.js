// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';

// ========================================================================
// const exampleImage = {
//     "id": 1527602,
//     "pageURL": "https://pixabay.com/photos/lobster-food-ide-1527602/",
//     "type": "photo",
//     "tags": "lobster, food, ide, lobster, lobster, lobster, lobster, lobster",
//     "previewURL": "https://cdn.pixabay.com/photo/2016/07/19/06/14/lobsters-1527602_150.jpg",
//     "previewWidth": 150,
//     "previewHeight": 99,
//     "webformatURL": "https://pixabay.com/get/gfb82d1505cfa5ff6ad3cb3ba55f1e615b1e0e5915db2e8724f153bbcc487b08e0a0bbde857550f128f964502ead168e4bd5b94bdf4a3d8fab5e632f3adafd666_640.jpg",
//     "webformatWidth": 640,
//     "webformatHeight": 426,
//     "largeImageURL": "https://pixabay.com/get/gd393a423c0066821d6ebb42409e0f8ba6e33d808e97c5affae66073e3c68969004f9565cb876743a0b76b45cef0fce6f124e098af78a7960c039b9cf7e383bd5_1280.jpg",
//     "imageWidth": 3072,
//     "imageHeight": 2048,
//     "imageSize": 2596565,
//     "views": 11657,
//     "downloads": 6152,
//     "collections": 280,
//     "likes": 28,
//     "comments": 4,
//     "user_id": 2419035,
//     "user": "ksbaeg",
//     "userImageURL": "https://cdn.pixabay.com/user/2022/03/26/07-11-47-551_250x250.jpg",
//     "noAiTraining": true
// }
// ========================================================================

// find gallery element
const gallery = document.querySelector('.gallery');

export function createGallery(images) {
  // Create gallery
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
  gallery.insertAdjacentHTML('afterbegin', markup);

  // const lightbox = new SimpleLightbox('.gallery a', {
  //   captionsData: 'alt',
  //   captionDelay: 250,
  //   overlayOpacity: 0.8,
  // });
  // lightbox.refresh();
}
// function clearGallery
export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  const loader = document.querySelector('.loader');
  loader.classList.remove('hidden');
}

export function hideLoader() {
  const loader = document.querySelector('.loader');
  loader.classList.add('hidden');
}
