import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const galleryImgsMarkup = createGalleryImgMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryImgsMarkup);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

function createGalleryImgMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href=${original}>
        <img class="gallery__image" src=${preview} alt=${description} />
        </a> 
      `;
    })
    .join("");
}
