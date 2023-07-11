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


//JS DEL MENU DESPLEGABLE

(function(){
  const listElements = document.querySelectorAll('.menu__item--show');
  const list = document.querySelector('.menu__links');
  const menu = document.querySelector('.menu__hamburguer');

  const addClick = ()=>{
      listElements.forEach(element =>{
          element.addEventListener('click', ()=>{

              
              let subMenu = element.children[1];
              let height = 0;
              element.classList.toggle('menu__item--active');


              if(subMenu.clientHeight === 0){
                  height = subMenu.scrollHeight;
              }

              subMenu.style.height = `${height}px`;

          });
      });
  }
  const deleteStyleHeight = ()=>{
      listElements.forEach(element=>{

          if(element.children[1].getAttribute('style')){
              element.children[1].removeAttribute('style');
              element.classList.remove('menu__item--active');
          }

      });
  }
  window.addEventListener('resize', ()=>{
      if(window.innerWidth > 800){
          deleteStyleHeight();
          if(list.classList.contains('menu__links--show'))
              list.classList.remove('menu__links--show');

      }else{
          addClick();
      }
  });
  if(window.innerWidth <= 800){
      addClick();
  }
  menu.addEventListener('click', ()=> list.classList.toggle('menu__links--show'));
})();