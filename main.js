const links = document.querySelectorAll("a");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}

const btnsOpen = document.querySelectorAll('.hero__item, .catalog__item');
const popUp = document.querySelector('.pop-up');
const bluredElements = document.querySelectorAll('.header, .main, .footer');
const bodyElem = document.querySelector('body');
const popUpImg = document.querySelector('.pop-up__img');

const handle = function(){
    popUp.classList.add('pop-up_active');
    bluredElements.forEach(elem => {
        elem.classList.add('blured');
    });
    bodyElem.style.overflow = 'hidden';
    popUpImg.src = this.querySelector('img').src;
}

btnsOpen.forEach(btn => {
    btn.addEventListener('click', handle);
});

// pop up
popUp.addEventListener('click', function(e){
    if(e.target===this){
        popUp.classList.remove('pop-up_active');
        bluredElements.forEach(elem => {
            elem.classList.remove('blured');
        });
        bodyElem.style.overflow = 'auto';
    }
});
// close pop up mobile
const popUpClose = document.querySelector('.pop-up__close-btn');
popUpClose.addEventListener('click', function(){
  popUp.classList.remove('pop-up_active');
  bluredElements.forEach(elem => {
      elem.classList.remove('blured');
  });
  bodyElem.style.overflow = 'auto';
});

// menu
const menuBtn = document.querySelector('.header__menu-btn');
const menu = document.querySelector('.menu');
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('header__menu-btn_active');
    menu.classList.toggle('menu_active');
});

// sticky header
window.onscroll = function() {checkSticky()};

// Get the header
let header = document.querySelector('.header');

// Get the offset position of the navbar
let sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function checkSticky() {
  if (window.pageYOffset > sticky) {
    header.classList.add("header_sticky");
  } else {
    header.classList.remove("header_sticky");
  }
}

// preloader
const preloader = document.querySelector('.preloader');
bodyElem.style.overflow = 'hidden';
function hidePreloader(){
  preloader.classList.add('preloader_hidden');
  bodyElem.style.overflow = 'auto';
}

setTimeout(hidePreloader, 4000);

// when click menu elem menu will close
const menuLinks = document.querySelectorAll('.menu__link');
menuLinks.forEach(elem => {
  elem.addEventListener('click', function(){
    menu.classList.remove('menu_active');
    menuBtn.classList.remove('header__menu-btn_active');
  });
});

