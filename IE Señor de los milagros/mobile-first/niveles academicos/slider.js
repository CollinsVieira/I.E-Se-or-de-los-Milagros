const slider = document.querySelector('.slider__auto');
const images = slider.querySelectorAll('.slider__auto__img');
let currentIndex = 0;

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlide();
}

function updateSlide() {
  images.forEach((image, index) => {
    if (index === currentIndex) {
      image.style.transform = 'translateX(0)';
    } else {
      image.style.transform = `translateX(-${100 * (index - currentIndex)}%)`;
    }
  });
}

window.addEventListener('resize', updateSlide);
setInterval(nextSlide, 3000);