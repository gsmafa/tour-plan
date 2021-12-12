/*------------- Toggle menu -------------*/
var buttonToggle = document.querySelector('.hamburger');
buttonToggle.addEventListener('click', function() {
	document.querySelector('.menu-mobile-hidden').classList.toggle('menu-mobile-visible');
	document.querySelector('.hamburger__line-top').classList.toggle('hamburger__line-top--transform');
	document.querySelector('.hamburger__line-middle').classList.toggle('hamburger__line-middle--none');
	document.querySelector('.hamburger__line-bottom').classList.toggle('hamburger__line-bottom--transform');
});
/*------------ Slider Swiper Block Hotel ------------*/
const hotelSlider = new Swiper('.hotel__slider', {
  // Optional parameters
  loop: true,
	keyboard: {
		enabled: true,
		pageUpDown: true,
	},
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button--next',
    prevEl: '.swiper-button--prev',
  },
});
/*------------ Modal Rating ------------*/
var buttonModal = document.querySelector('.hotel__rating');
buttonModal.addEventListener('click', function() {
	document.querySelector('.modal-rating__overlay').classList.add('modal-rating__overlay--visible');
	document.querySelector('.modal-rating__dialog').classList.add('modal-rating__dialog--visible');
});
var closeModal = document.querySelector('.modal-rating__close');
closeModal.addEventListener('click', function() {
	document.querySelector('.modal-rating__overlay').classList.remove('modal-rating__overlay--visible');
	document.querySelector('.modal-rating__dialog').classList.remove('modal-rating__dialog--visible');
});
/*------------ Modal Booking ------------*/
var buttonModal = document.querySelector('.button-quick-booking');
buttonModal.addEventListener('click', function() {
	document.querySelector('.modal-booking__overlay').classList.add('modal-booking__overlay--visible');
	document.querySelector('.modal-booking__dialog').classList.add('modal-booking__dialog--visible');
});
var closeModal = document.querySelector('.modal-booking__close');
closeModal.addEventListener('click', function() {
	document.querySelector('.modal-booking__overlay').classList.remove('modal-booking__overlay--visible');
	document.querySelector('.modal-booking__dialog').classList.remove('modal-booking__dialog--visible');
});
/*------------ Slider Swiper Block About Us ------------*/
const reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,
	keyboard: {
		enabled: true,
		pageUpDown: true,
	},
  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
});
/*------- Parallax Effect ------*/
const parallax = document.getElementsByClassName('newsletter');

window.addEventListener('scroll', function() {
	let offset = window.pageYOffset;
	parallax.style.backgroundPositionY = offset * 0.7 + 'px';
});