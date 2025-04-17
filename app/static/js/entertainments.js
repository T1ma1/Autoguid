const cards = document.querySelectorAll('.card-enterteiments')

function sliderCardsTour() {
  console.log(123);
  cards.forEach((card) => {
    const slider = card.querySelector('.card-enterteiments__image');
    const slides = slider.querySelectorAll('.card-enterteiments__img');
    
    let currentIndex = 0;
    const slideWidth = slider.clientWidth;
    
    const updateSlider = () => {
      slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    const handleLeftClick = () => {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = slides.length - 1;
      }
      updateSlider();
    }

    const handleRightClick = () => {
      currentIndex++;
      if (currentIndex >= slides.length) {
        currentIndex = 0;
      }
      updateSlider();
    }

    const leftArrow = card.querySelector('.slider-arrow__left');
    const rightArrow = card.querySelector('.slider-arrow__right');

    leftArrow.addEventListener('click', handleLeftClick);
    rightArrow.addEventListener('click', handleRightClick);
  })
  
}

sliderCardsTour();