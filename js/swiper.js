$('.slider__wrapper').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,

  dots: false,
  centerMode: true,
  variableWidth: true,
  speed: 300,

  prevArrow: document.querySelectorAll('.slider__slide-flex-up-prev'),
  nextArrow: document.querySelectorAll('.slider__slide-flex-up-next'),

  breakpoints: {
    // when window width is <= 499px
    499: {
        slidesPerView: 1,
        spaceBetweenSlides: 100
    },
    // when window width is <= 999px
    999: {
        slidesPerView: 1,
        spaceBetweenSlides: 1000
    }
}
 
});

// $('#slider__wrapper-header').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   arrows: true,

//   dots: false,
//   centerMode: true,
//   variableWidth: true,
//   speed: 300,

//   prevArrow: document.querySelectorAll('#slider__slide-flex-up-prev-header'),
//   nextArrow: document.querySelectorAll('#slider__slide-flex-up-next-header'),
 
 
 
// });
// $('#slider__wrapper-header-down').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   arrows: true,

//   dots: false,
//   centerMode: true,
//   variableWidth: true,
//   speed: 300,

//   prevArrow: document.querySelectorAll('#slider__slide-flex-up-prev-header-down'),
//   nextArrow: document.querySelectorAll('#slider__slide-flex-up-next-header-up'),
 
 
 
// });