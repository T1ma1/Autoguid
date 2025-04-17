// const cards = document.querySelectorAll('.card-tour');

// export function sliderCardsTour() {
//   cards.forEach((card) => {
//     const slider = card.querySelector('.card-tour__image');
//     const leftArrow = card.querySelector('.slider-arrow__left');
//     const rightArrow = card.querySelector('.slider-arrow__right');
//     const slides = slider.querySelectorAll('.card-tour__img');

//     let currentIndex = 0;
//     const slideWidth = slider.clientWidth;
//     let touchStartX = 0;
//     let touchEndX = 0;

//     const loadRamainingImage = (currentIndex) => {
//       const images = card.querySelectorAll('img[data-src]');
//       const currentImage = images[currentIndex];
//       if (currentImage) {
//         currentImage.src = currentImage.dataset.src;
//         currentImage.removeAttribute('data-src');
//       }
//     }

//     const updateSlider = () => {
//       slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
//     };

//     const handleLeftClick = () => {
//       currentIndex--;
//       if (currentIndex < 0) {
//         currentIndex = slides.length - 1;
//       }
//       updateSlider();
//       loadRamainingImage(currentIndex - 1);
//     };

//     const handleRightClick = () => {
//       currentIndex++;
//       if (currentIndex >= slides.length) {
//         currentIndex = 0;
//       }
//       updateSlider();
//       loadRamainingImage(0);
//     };

//     const handleTouchStart = (event) => {
//       touchStartX = event.touches[0].clientX;
//     };

//     const handleTouchMove = (event) => {
//       touchEndX = event.touches[0].clientX;
//     };

//     const handleTouchEnd = (event) => {
//       event.preventDefault();
//       const touchDiff = touchEndX - touchStartX;
//       const swipeThreshold = slideWidth * 0.1;

//       if (touchDiff > swipeThreshold) {
//         handleLeftClick();
//       } else if (touchDiff < -swipeThreshold) {
//         handleRightClick();
//       }
//     };

//     leftArrow.addEventListener('click', handleLeftClick)
//     rightArrow.addEventListener('click', handleRightClick)
//     slider.addEventListener('touchstart', handleTouchStart);
//     slider.addEventListener('touchmove', handleTouchMove);
//     slider.addEventListener('touchend', handleTouchEnd);
//     slider.removeEventListener('touchcancel', handleTouchEnd);
//     slider.removeEventListener('touchleave', handleTouchEnd);
//   });
  
// }


// sliderCardsTour();


// import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs'

// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'vertical',
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });
