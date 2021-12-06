/*------------ Slider Swiper ------------*/
const swiper = new Swiper('.swiper', {
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