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