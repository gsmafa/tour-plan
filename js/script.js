/*------------- Toggle menu -------------*/
var buttonToggle = document.querySelector('.hamburger');
buttonToggle.addEventListener('click', function() {
	document.querySelector('.menu-mobile--hidden').classList.toggle('menu-mobile--visible');
	document.querySelector('.hamburger__line-top').classList.toggle('hamburger__line-top--transform');
	document.querySelector('.hamburger__line-middle').classList.toggle('hamburger__line-middle--none');
	document.querySelector('.hamburger__line-bottom').classList.toggle('hamburger__line-bottom--transform');
})
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
})