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
