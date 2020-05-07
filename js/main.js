const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector("#close");

const toggleModal = function () {
  modal.classList.toggle("modal--active");
};



cartButton.addEventListener("click", toggleModal);
modalClose.addEventListener("click", toggleModal);

new WOW().init();
