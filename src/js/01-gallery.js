// Add imports above this line
import { galleryItems } from './gallery-items';

import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";

// Change code below this line

const galleryEl = document.querySelector(`.gallery`);
const imageMarkup = createImageMarkup(galleryItems);

galleryEl.insertAdjacentHTML(`beforeend`, imageMarkup);

function createImageMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
            return `<li class = "gallery__item">
   <a class="gallery__link" href="${original}">
     <img class="gallery__image" src="${preview}" 
    data-source="${original}"
     alt="${description}"/></a></li>`
    ;
        })
        .join(``);
}

// // ========================================================
const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: `alt`,
    captionDelay: 250,
 });