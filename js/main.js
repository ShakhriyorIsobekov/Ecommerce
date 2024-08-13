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
   elCardLink.addEventListener('click', function (evt) {
      evt.preventDefault();
      elCardModalOpen.classList.toggle('site-header__card-modal-open');
   });
};

// -----------------------------------

// img-showcase__thumbnails
const elProductPageGallery = document.querySelector('.product-page__gallery')
const elShowcaseMainImg = elProductPageGallery.querySelector(".img-showcase__active-img");
const elsShowcaseItem = elProductPageGallery.querySelectorAll(".img-showcase__thumbnail");
const elsShowcaseButton = elProductPageGallery.querySelectorAll(".js-showcase__thumbnail-button");

// deactive img-showcase-item
function deactiveShowcaseButtonActive() {
   elsShowcaseButton.forEach(function (elShowcaseButton) {
      elShowcaseButton.parentElement.classList.remove(modifiers.imgThumbnailActive);
   });
};

elsShowcaseButton.forEach(function (elShowcaseButton) {
   elShowcaseButton.addEventListener('click', function () {
      deactiveShowcaseButtonActive();
      elShowcaseButton.parentElement.classList.add(modifiers.imgThumbnailActive);

      // change main img accordingly
      elShowcaseMainImg.src = elShowcaseButton.dataset.imgShowcaseBig;
   });
});


// Ligthbox
const elLightbox = document.querySelector('.lightbox');
const elButtonLightbox = document.querySelector('.img-showcase__lightbox-toggle');
const elLightboxClose = document.querySelector('.lightbox__close-icon');

const elLightboxMainImg = elLightbox.querySelector('.img-showcase__active-img');
const elsLightboxShowcaseButton = elLightbox.querySelectorAll('.js-img-lightbox-thumbnail-button');
const elsLightboxImgThumbnail = elLightbox.querySelectorAll('.img-showcase__thumbnail');

elButtonLightbox.addEventListener('click', function () {
   elLightbox.classList.add('lightbox-open');
});

elLightboxClose.addEventListener('click', function () {
   elLightbox.classList.remove('lightbox-open');
});

// Function
function deactiveLightboxButton() {
   elsLightboxShowcaseButton.forEach(function (elLightboxShowcaseButton) {
      elLightboxShowcaseButton.parentElement.classList.remove(modifiers.imgThumbnailActive)
   })
}

elsLightboxShowcaseButton.forEach(function (elLightboxShowcaseButton) {
   elLightboxShowcaseButton.addEventListener('click', function () {
      deactiveLightboxButton();
      elLightboxShowcaseButton.parentElement.classList.add(modifiers.imgThumbnailActive);
      // Change main img accordingly
      elLightboxMainImg.src = elLightboxShowcaseButton.dataset.imgShowcaseBig;
   });

});


// Ligtbox Control

const elLightboxControlPrev = elLightbox.querySelector('.js-ligthbox-control-prev');
const elLightboxControlNext = elLightbox.querySelector('.js-ligthbox-control-next');
const elLightboxButton = elLightbox.querySelector('.js-lightbox-first-btn');
const elActiveItem = elLightbox.querySelector('.img-showcase__thumbnail-active');

if (elLightboxControlNext) {
   elLightboxControlNext.addEventListener('click', function () {
      const elActiveItem = elLightbox.querySelector('.img-showcase__thumbnail-active');

      // Remove active class when u pressing next
      elActiveItem.classList.remove(modifiers.imgThumbnailActive);

      // Change active when you press next
      let elNextActiveItem;

      if (elActiveItem.nextElementSibling === null) {
         elNextActiveItem = elsLightboxImgThumbnail[0];
      } else {
         elNextActiveItem = elActiveItem.nextElementSibling;
      }
      elNextActiveItem.classList.add(modifiers.imgThumbnailActive);

      elLightboxMainImg.src = elNextActiveItem.children[0].dataset.imgShowcaseBig;

   });
};

if (elLightboxControlPrev) {
   elLightboxControlPrev.addEventListener('click', function () {
      const elActiveItem = elLightbox.querySelector('.img-showcase__thumbnail-active');

      elActiveItem.classList.remove(modifiers.imgThumbnailActive);

      let elPrevActiveItem;

      if (elActiveItem.previousElementSibling === null) {
         elPrevActiveItem = elsLightboxImgThumbnail[3];
      } else {
         elPrevActiveItem = elActiveItem.previousElementSibling;
      }
      elPrevActiveItem.classList.add(modifiers.imgThumbnailActive);

      elLightboxMainImg.src = elPrevActiveItem.children[0].dataset.imgShowcaseBig;
   });
};

// Quantity buttons

const elQuantityButtonMinus = document.querySelector('.js-product-info__quantity-button-minus');
const elQuantityButtonPlus = document.querySelector('.js-product-info__quantity-button-plus');
const elQuantityCount = document.querySelector('.product-info__quantity');

age = 0

if (elQuantityButtonPlus) {
   elQuantityButtonPlus.addEventListener('click', function () {
      // Plus one
      elQuantityCount.textContent = parseInt(elQuantityCount.textContent, 10) + 1

   });
};

if (elQuantityButtonMinus) {
   elQuantityButtonMinus.addEventListener('click', function () {
      const qyt = parseInt(elQuantityCount.textContent, 10);
      if (qyt > 0) {
         // Minus one
         elQuantityCount.textContent = parseInt(elQuantityCount.textContent, 10) - 1
      }
   })
}