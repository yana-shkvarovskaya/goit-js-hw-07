import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryImgsMarkup = createGalleryImgMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryImgsMarkup);

galleryContainer.addEventListener("click", onGalleryContainerClick);

function createGalleryImgMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
        <a class="gallery__link" 
        href= ${original}>
          <img
            class="gallery__image"
            src=${preview}
            data-source=${original}
            alt=${description}
          />
        </a>
      </div>
      `;
    })
    .join("");
}

function onGalleryContainerClick(event) {
  event.preventDefault();
  const isImgSelected = event.target.classList.contains("gallery__image");

  if (!isImgSelected) {
    return;
  }

  let selectedImg = event.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${selectedImg}" width="800" height="600">
`);

  instance.show();

  if (instance.visible) {
    document.addEventListener("keydown", onEscKeyPress);

    function onEscKeyPress(event) {
      const ESC_KEY_CODE = "Escape";

      if (event.code === ESC_KEY_CODE) {
        instance.close();
      }
    }
  }
}
