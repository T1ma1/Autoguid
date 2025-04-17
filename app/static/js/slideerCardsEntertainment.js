const cards = document.querySelectorAll('.card-enterteiments');

function sliderCardsTour() {
  cards.forEach((card) => {
    const slider = card.querySelector('.card-enterteiments__image');
    const slides = slider.querySelectorAll('.card-enterteiments__img');

    let currentIndex = 0;
    const slideWidth = slider.clientWidth;
    let touchStartX = 0;
    let touchEndX = 0;

    const updateSlider = () => {
      slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    };

    const handleLeftClick = () => {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = slides.length - 1;
      }
      updateSlider();
    };

    const handleRightClick = () => {
      currentIndex++;
      if (currentIndex >= slides.length) {
        currentIndex = 0;
      }
      updateSlider();
    };

    const handleTouchStart = (event) => {
      touchStartX = event.touches[0].clientX;
    };

    const handleTouchMove = (event) => {
      touchEndX = event.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      const touchDiff = touchEndX - touchStartX;
      const swipeThreshold = slideWidth * 0.1; // Порог свайпа, чтобы определить, что свайп произошел достаточно далеко

      if (touchDiff > swipeThreshold) {
        handleLeftClick(); // Swipe right
      } else if (touchDiff < -swipeThreshold) {
        handleRightClick(); // Swipe left
      }
    };

    const leftArrow = card.querySelector('.slider-arrow__left');
    const rightArrow = card.querySelector('.slider-arrow__right');

    leftArrow ? leftArrow.addEventListener('click', handleLeftClick) : undefined;
    rightArrow ? rightArrow.addEventListener('click', handleRightClick) : undefined;

    slider.addEventListener('touchstart', handleTouchStart);
    slider.addEventListener('touchmove', handleTouchMove);
    slider.addEventListener('touchend', handleTouchEnd);
  });
}

sliderCardsTour();
