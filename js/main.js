// Modifiers
const modifiers = {
   imgThumbnailActive: 'img-showcase__thumbnail-active'
};



// Shopping card modal
const elCardLink = document.querySelector(".js-site-header-card-link");
const elCardModalOpen = document.querySelector(".site-header__card-modal");
const elHeaderCardLink = document.querySelector(".site-header__card");


if (elCardLink) {
   elHeaderCardLink.classList.remove('site-header__card-empty')
   elCardLink.addEventListener('click', function(evt) {
      evt.preventDefault();
      elCardModalOpen.classList.toggle('site-header__card-modal-open');
   });
};

// -----------------------------------

// img-showcase__thumbnails
const elShowcaseMainImg = document.querySelector(".img-showcase__active-img");
const elsShowcaseItem = document.querySelectorAll(".img-showcase__thumbnail");
const elsShowcaseButton = document.querySelectorAll(".img-showcase__thumbnail-button");

// deactive img-showcase-item
function deactiveShowcaseButtonActive () {
   elsShowcaseButton.forEach(function(elShowcaseButton) {
      elShowcaseButton.parentElement.classList.remove(modifiers.imgThumbnailActive);
   });
};

elsShowcaseButton.forEach(function(elShowcaseButton) {
   elShowcaseButton.addEventListener('click', function() {
      deactiveShowcaseButtonActive();
      elShowcaseButton.parentElement.classList.add(modifiers.imgThumbnailActive);

      // change main img accordingly
      elShowcaseMainImg.src = elShowcaseButton.dataset.imgShowcaseBig
   });
});


// Ligthbox
const elLightbox = document.querySelector('.lightbox');
const elButtonLightbox = document.querySelector('.img-showcase__lightbox-toggle');
const elLightboxClose = document.querySelector('.lightbox__close-icon');

elButtonLightbox.addEventListener('click', function() {
   elLightbox.classList.add('lightbox-open');
});

elLightboxClose.addEventListener('click', function() {
   elLightbox.classList.remove('lightbox-open');
});