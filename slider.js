//JS DEL SLIDER MODOBILE

const enable = (e) =>{
    document.getElementById('burger').classList.toggle('open')
    document.getElementById('nav').classList.toggle('nav__container-open')
}

const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let scrollPos = 0;
let scrollWidth = slider.scrollWidth - slider.clientWidth;

prevBtn.addEventListener('click', () => {
  if (scrollPos > 0) {
    scrollPos -= slider.clientWidth;
  }
  
  slider.scrollTo({
    top: 0,
    left: scrollPos,
    behavior: 'smooth'
  });
});

nextBtn.addEventListener('click', () => {
  if (scrollPos < scrollWidth) {
    scrollPos += slider.clientWidth;
  }
  
  slider.scrollTo({
    top: 0,
    left: scrollPos,
    behavior: 'smooth'
  });
});