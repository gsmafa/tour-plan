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
const aboutusSlider = new Swiper('.about-us__slider', {
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